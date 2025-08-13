import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useCallback, useEffect, useMemo, useState } from 'react';
import CardBox from '../../shared/CardBox';
import {
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Checkbox,
  Dropdown,
  DropdownItem,
  TextInput,
  Toast,
} from 'flowbite-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/shadcn-ui/Default-Ui/select';
import { Icon } from '@iconify/react/dist/iconify.js';
import { HiCheckCircle, HiTrash } from 'react-icons/hi';
import React from 'react';
import { uniqueId } from 'lodash';

import emily from 'src/assets/images/profile/emily.png';
import Juan from 'src/assets/images/profile/Juan.png';
import olivia from 'src/assets/images/profile/olivia.png';
import Kiley from 'src/assets/images/profile/Kiley.png';
import ryan from 'src/assets/images/profile/ryan.png';
import Dalton from 'src/assets/images/profile/Dalton.png';
import jason from 'src/assets/images/profile/jason.png';
import Janita from 'src/assets/images/profile/Janita.png';

interface UserType {
  id: string;
  avatar?: string;
  userName: string;
  role: string;
  badgecolor?: string;
  age: number;
  phone: string;
  email: string;
  isNew?: boolean;
}

const User: UserType[] = [
  {
    id: uniqueId(),
    avatar: jason,
    userName: 'James Johnson',
    role: 'Admin',
    badgecolor: 'lightinfo',
    age: 30,
    phone: '123-456-7890',
    email: 'alice@company.com',
  },
  {
    id: uniqueId(),
    avatar: Juan,
    userName: 'Maria Hernandez',
    role: 'User',
    badgecolor: 'lightsuccess',
    age: 45,
    phone: '555-312-8899',
    email: 'bobsmith@gmail.com',
  },
  {
    id: uniqueId(),
    avatar: ryan,
    userName: 'Clara Mason',
    role: 'Superadmin',
    badgecolor: 'lightwarning',
    age: 38,
    phone: '402-123-4567',
    email: 'clara@enterprise.com',
  },
  {
    id: uniqueId(),
    avatar: olivia,
    userName: 'Derek White',
    role: 'Moderator',
    badgecolor: 'lighterror',
    age: 29,
    phone: '212-321-6789',
    email: 'derek@forum.com',
  },
  {
    id: uniqueId(),
    avatar: Kiley,
    userName: 'Eva Carter',
    role: 'Author',
    badgecolor: 'lightinfo',
    age: 33,
    phone: '678-999-8212',
    email: 'eva@blogging.com',
  },
  {
    id: uniqueId(),
    avatar: Janita,
    userName: 'Frank Zhou',
    role: 'User',
    badgecolor: 'lightsuccess',
    age: 41,
    phone: '504-222-9990',
    email: 'fzhou@yahoo.com',
  },
  {
    id: uniqueId(),
    avatar: Dalton,
    userName: 'Grace Lee',
    role: 'Admin',
    badgecolor: 'lightinfo',
    age: 27,
    phone: '703-301-4444',
    email: 'gracelee@company.com',
  },
  {
    id: uniqueId(),
    avatar: emily,
    userName: 'Henry Ford',
    role: 'Superadmin',
    badgecolor: 'lightwarning',
    age: 52,
    phone: '888-456-1234',
    email: 'henry.ford@auto.com',
  },
];

const roleColorMap: Record<string, string> = {
  Admin: 'lightinfo',
  User: 'lightsuccess',
  Superadmin: 'lightwarning',
  Moderator: 'lighterror',
  Author: 'lightprimary',
};

function UserDataTable() {
  const [userData, setUserData] = useState<UserType[]>(User.map((userdata) => ({ ...userdata })));
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('All');
  const [rowSelection, setRowSelection] = useState({});
  const [editingRowId, setEditingRowId] = useState<string | null>(null);
  const [editedRowData, setEditedRowData] = useState<Partial<UserType>>({});
  const [showSearch, setShowSearch] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>({
    id: true,
    userName: true,
    role: true,
    age: true,
    phone: true,
    email: true,
  });

  const [showNewUserRow, setShowNewUserRow] = useState(false);
  const [newUser, setNewUser] = useState<Partial<UserType>>({
    id: uniqueId(),
    avatar: '/images/profile/jason.svg',
    userName: '',
    role: 'user',
    age: 0,
    phone: '',
    email: '',
  });

  const handleDelete = (rowId: string) => {
    setUserData((prev) => prev.filter((item) => item.id !== rowId));
    setFeedback('User deleted');
  };

  // Create column helper
  const columnHelper = createColumnHelper<UserType>();

  // Build all columns using columnHelper
  const allColumns = useMemo(
    () =>
      [
        columnHelper.display({
          id: 'select',
          header: (args) => {
            const { table } = args;
            return (
              <Checkbox
                className="!checkbox"
                checked={table.getIsAllPageRowsSelected()}
                onChange={table.getToggleAllPageRowsSelectedHandler()}
                aria-label="Select all rows"
              />
            );
          },
          cell: (args) => {
            const { row } = args;
            return (
              <Checkbox
                className="!checkbox"
                checked={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
                aria-label="Select row"
              />
            );
          },
        }),
        columnHelper.accessor('userName', {
          header: 'Name',
          cell: (args) => {
            const { row } = args;
            return editingRowId === row.original.id ? (
              <TextInput
                sizing="sm"
                value={editedRowData.userName ?? row.original.userName}
                onChange={(e) =>
                  setEditedRowData((prev) => ({
                    ...prev,
                    userName: e.target.value,
                    avatar: prev.avatar ?? row.original.avatar,
                  }))
                }
                aria-label="Edit user name"
                className="!form-control"
              />
            ) : (
              <div className="flex items-center gap-2 flex-nowrap w-full">
                <Avatar img={row.original.avatar} rounded size="sm" alt={row.original.userName} />
                <p className="text-sm font-medium">{row.original.userName}</p>
              </div>
            );
          },
        }),
        columnHelper.accessor('role', {
          header: 'Role',
          cell: (args) => {
            const { row } = args;
            return editingRowId === row.original.id ? (
              <Select
                value={editedRowData.role ?? row.original.role}
                onValueChange={(value: any) =>
                  setEditedRowData((prev) => ({
                    ...prev,
                    role: value,
                  }))
                }
              >
                <SelectTrigger className="select-md-transparent !pe-0" aria-label="Edit Role">
                  <SelectValue placeholder="Select Role" />
                </SelectTrigger>
                <SelectContent>
                  {['Admin', 'User', 'Superadmin', 'Moderator', 'Author'].map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Badge
                className="text-xs font-medium"
                color={roleColorMap[row.original.role] || 'gray'}
              >
                {row.original.role}
              </Badge>
            );
          },
        }),
        columnHelper.accessor('age', {
          header: 'Age',
          cell: (args) => {
            const { row } = args;
            return editingRowId === row.original.id ? (
              <TextInput
                sizing="sm"
                type="number"
                step="0.01"
                className="!form-control"
                value={editedRowData.age !== undefined ? editedRowData.age : row.original.age}
                onChange={(e) =>
                  setEditedRowData((prev) => ({
                    ...prev,
                    age: e.target.value ? parseFloat(e.target.value) : row.original.age,
                  }))
                }
                aria-label="Edit age"
              />
            ) : (
              <p className="text-sm font-medium">{row.original.age}</p>
            );
          },
        }),
        columnHelper.accessor('phone', {
          header: 'Phone',
          cell: (args) => {
            const { row } = args;
            return editingRowId === row.original.id ? (
              <TextInput
                className="w-full !form-control"
                sizing="sm"
                value={editedRowData.phone ?? row.original.phone}
                onChange={(e) =>
                  setEditedRowData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                aria-label="Edit phone"
              />
            ) : (
              <p className="text-sm font-medium">{row.original.phone}</p>
            );
          },
        }),
        columnHelper.accessor('email', {
          header: 'Email',
          cell: (args) => {
            const { row } = args;
            return editingRowId === row.original.id ? (
              <TextInput
                className="w-full !form-control"
                sizing="sm"
                value={editedRowData.email ?? row.original.email}
                onChange={(e) =>
                  setEditedRowData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                aria-label="Edit phone"
              />
            ) : (
              <p className="text-sm font-medium">{row.original.email}</p>
            );
          },
        }),
        columnHelper.display({
          id: 'actions',
          header: 'Actions',
          cell: (args) => {
            const { row } = args;
            const isEditing = editingRowId === row.original.id;
            return (
              <div className="flex items-center gap-2">
                {/* Editing buttons */}
                {isEditing ? (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setUserData((prev) =>
                          prev.map((item) =>
                            item.id === row.original.id ? { ...item, ...editedRowData } : item,
                          ),
                        );
                        setEditingRowId(null);
                        setFeedback('User updated');
                      }}
                      className="p-1.5 rounded-full hover:bg-lightprimary dark:hover:bg-darkprimary hover:cursor-pointer"
                      aria-label="Save changes"
                    >
                      <Icon
                        icon="solar:check-read-linear"
                        width={20}
                        height={20}
                        className="text-success"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingRowId(null)}
                      className="p-1.5 rounded-full hover:bg-lighterror dark:hover:bg-lighterror hover:cursor-pointer"
                      aria-label="Cancel edit"
                    >
                      <Icon
                        icon="solar:close-circle-linear"
                        width={20}
                        height={20}
                        className="text-error"
                      />
                    </button>
                  </>
                ) : (
                  <>
                    {/* More menu */}
                    <Dropdown
                      renderTrigger={() => (
                        <span className="btn-circle-hover cursor-pointer p-0 h-7 w-7 bg-white dark:bg-black">
                          <Icon
                            icon={'solar:menu-dots-bold'}
                            width={18}
                            height={18}
                            aria-label="menu"
                          />
                        </span>
                      )}
                      className="shadow dark:shadow-white/20"
                      inline={true}
                      arrowIcon={false}
                      dismissOnClick={true}
                    >
                      <DropdownItem
                        onClick={() => {
                          setEditingRowId(row.original.id);
                          setEditedRowData(row.original);
                        }}
                        icon={() => (
                          <Icon icon="solar:pen-2-linear" width={20} height={20} className="me-2" />
                        )}
                      >
                        Edit
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => handleDelete(row.original.id)}
                        icon={() => (
                          <Icon
                            icon="solar:trash-bin-2-outline"
                            width={20}
                            height={20}
                            color="red"
                            className="me-2"
                          />
                        )}
                      >
                        Delete
                      </DropdownItem>
                    </Dropdown>
                  </>
                )}
              </div>
            );
          },
        }),
      ] as ColumnDef<UserType>[],
    [editingRowId, editedRowData],
  );

  // Filter columns based on columnVisibility before passing to useReactTable
  const visibleColumns = useMemo(
    () =>
      allColumns.filter((col) => {
        if (col.id === 'select') return true;
        if ('accessorKey' in col && typeof col.accessorKey === 'string') {
          return columnVisibility[col.accessorKey];
        }
        if (col.id === 'actions') return true;
        return true;
      }),
    [allColumns, columnVisibility],
  );

  // Filter orderData based on columnFilters
  const filteredData = useMemo(() => {
    return roleFilter === 'All' ? userData : userData.filter((user) => user.role === roleFilter);
  }, [roleFilter, userData]);

  const table = useReactTable({
    data: filteredData,
    columns: visibleColumns,
    state: {
      sorting,
      globalFilter,
      rowSelection,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    autoResetPageIndex: true,
  });

  // Memoize visible column keys for export
  const visibleExportKeys = useMemo(
    () =>
      visibleColumns
        .filter((col) => (col as any).accessorKey && col.id !== 'select' && col.id !== 'actions')
        .map((col) => (col as any).accessorKey as keyof UserType),
    [visibleColumns],
  );

  // Memoize export headers
  const exportHeaders = useMemo(
    () =>
      visibleColumns
        .filter((col) => (col as any).accessorKey && col.id !== 'select' && col.id !== 'actions')
        .map((col) =>
          typeof (col as any).header === 'string' ? (col as any).header : (col as any).accessorKey,
        ),
    [visibleColumns],
  );

  // Optimized CSV export handler
  const handleExportCSV = useCallback(() => {
    const rows = filteredData.map((row) => visibleExportKeys.map((key) => row[key] ?? ''));
    const csvContent = [
      exportHeaders.join(','),
      ...rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',')),
    ].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'users.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [filteredData, visibleExportKeys, exportHeaders]);

  // Optimized bulk delete handler
  const handleBulkDelete = useCallback(() => {
    const selectedIds = table.getSelectedRowModel().rows.map((r) => r.original.id);
    setUserData((prev) => prev.filter((item) => !selectedIds.includes(item.id)));
    table.resetRowSelection();
    setFeedback(`Deleted ${selectedIds.length} user(s)`);
  }, [table]);

  useEffect(() => {
    if (!feedback) return;

    const timer = setTimeout(() => {
      setFeedback(null);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup on unmount or feedback change
  }, [feedback]);

  return (
    <CardBox>
      <div>
        {/* title */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-5">
          <h3 className="text-lg font-semibold text-dark dark:text-white mb-4 md:mb-0">
            User Table
          </h3>
          <div className="flex flex-wrap items-center gap-1 md:gap-2">
            {/* Search */}
            {!showSearch ? (
              <button
                onClick={() => setShowSearch(true)}
                aria-label="Show search"
                className="p-2 rounded-full hover:bg-lightprimary dark:hover:bg-darkprimary border border-transparent focus:outline-none transition hover:cursor-pointer"
              >
                <Icon icon={'solar:minimalistic-magnifer-line-duotone'} width={18} height={18} />
              </button>
            ) : (
              <TextInput
                placeholder="Search..."
                className="!form-control w-40 md:w-56"
                value={globalFilter ?? ''}
                onChange={(e) => setGlobalFilter(e.target.value)}
                onBlur={() => {
                  if (!globalFilter) setShowSearch(false);
                }}
                aria-label="Search orders"
                sizing="sm"
              />
            )}

            {/* Column visibility dropdown */}
            <Dropdown
              renderTrigger={() => (
                <span className="btn-circle-hover cursor-pointer p-0 h-9 w-9 bg-white dark:bg-black">
                  <Icon
                    icon={'solar:settings-line-duotone'}
                    width={18}
                    height={18}
                    aria-label="Settings"
                  />
                </span>
              )}
              inline={true}
              dismissOnClick={false}
              arrowIcon={false}
            >
              {Object.keys(columnVisibility).map((col) => (
                <DropdownItem key={col}>
                  <Checkbox
                    checked={columnVisibility[col]}
                    onChange={() =>
                      setColumnVisibility((prev) => ({
                        ...prev,
                        [col]: !prev[col],
                      }))
                    }
                    className="mr-2"
                  />
                  <span className="capitalize">{col}</span>
                </DropdownItem>
              ))}
              <DropdownItem disabled>
                <Checkbox checked readOnly className="mr-2" />
                <span className="capitalize text-gray-400">actions</span>
              </DropdownItem>
            </Dropdown>

            {/* Download as CSV button */}
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-1 p-2 rounded-full hover:bg-lightprimary dark:hover:bg-darkprimary border border-transparent focus:border-primary focus:outline-none transition hover:cursor-pointer"
              aria-label="Download CSV"
            >
              <Icon icon="solar:download-minimalistic-line-duotone" width={18} height={18} />
            </button>

            {/* Bulk delete button */}
            {table.getSelectedRowModel().rows.length > 0 && (
              <button
                onClick={handleBulkDelete}
                className="p-2 text-error rounded-full hover:bg-lightprimary dark:hover:bg-darkprimary border border-transparent focus:outline-none transition hover:cursor-pointer"
              >
                <Icon icon="solar:trash-bin-2-outline" width={18} height={18} />
              </button>
            )}
          </div>
        </div>

        {/* filter & create user */}
        <div className="flex md:flex-row flex-col gap-2 item-center justify-between my-5">
          <div>
            <ButtonGroup className="border border-ld flex-wrap">
              {['All', 'Admin', 'User', 'Superadmin', 'Moderator', 'Author'].map((role) => {
                const isSelected = roleFilter === role;

                return (
                  <Button
                    key={role}
                    onClick={() => setRoleFilter(role)}
                    className={`${
                      isSelected
                        ? 'bg-primary'
                        : 'bg-transparent dark:bg-transparent hover:bg-lightprimary dark:hover:bg-darkprimary text-black'
                    } focus:ring-0 first:!border-s-0`}
                  >
                    {role}
                  </Button>
                );
              })}
            </ButtonGroup>
          </div>
          <Button onClick={() => setShowNewUserRow(true)} color={'primary'} className="w-fit">
            Create User
          </Button>
        </div>

        {/* Feedback Toast */}
        {feedback && (
          <Toast
            className={`fixed top-4 right-4 z-50 flex items-center ${
              feedback.toLowerCase().includes('delete')
                ? 'bg-red-100 dark:bg-red-300/90 text-red-700 dark:text-red-700'
                : 'bg-green-100 dark:bg-green-100 text-green-700 dark:text-green-700'
            }`}
          >
            <div className="mr-2 flex items-center">
              {feedback.toLowerCase().includes('delete') ? (
                <HiTrash className="w-5 h-5 text-red-500 mr-1" />
              ) : (
                <HiCheckCircle className="w-5 h-5 text-green-500 mr-1" />
              )}
              {feedback}
            </div>
            <button
              onClick={() => setFeedback(null)}
              className="ml-auto p-1 rounded hover:cursor-pointer"
              aria-label="Close notification"
              type="button"
            >
              <Icon icon="solar:close-circle-linear" width={20} height={20} />
            </button>
          </Toast>
        )}

        {/* user table */}
        <div className="overflow-x-auto">
          <div className="border rounded-md border-ld overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full w-full">
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th key={header.id} className="px-4 py-2 border-b border-ld text-left">
                          {header.isPlaceholder ? null : (
                            <div
                              className={
                                header.column.getCanSort() ? 'cursor-pointer select-none' : ''
                              }
                              onClick={header.column.getToggleSortingHandler()}
                            >
                              <div className="flex items-center gap-1">
                                {flexRender(header.column.columnDef.header, header.getContext())}
                                {header.column.getCanSort() && (
                                  <Icon icon="solar:transfer-vertical-line-duotone" />
                                )}
                              </div>
                            </div>
                          )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {/* Add New Row */}
                  {showNewUserRow && (
                    <tr className="border-b last:border-b-0 border-ld">
                      <td className="px-4 py-2">
                        <Checkbox className="!checkbox" aria-label="Select row" />
                      </td>
                      <td className="px-4 py-2 min-w-[180px]">
                        <TextInput
                          sizing="sm"
                          value={newUser.userName}
                          onChange={(e: { target: { value: any } }) =>
                            setNewUser((prev) => ({
                              ...prev,
                              userName: e.target.value,
                            }))
                          }
                          aria-label="Edit user name"
                          className="!form-control"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <Select
                          value={newUser.role}
                          onValueChange={(value) =>
                            setNewUser((prev) => ({
                              ...prev,
                              role: value,
                            }))
                          }
                        >
                          <SelectTrigger className="select-md-transparent" aria-label="Select Role">
                            <SelectValue placeholder="Select Role" />
                          </SelectTrigger>
                          <SelectContent>
                            {['Admin', 'User', 'Superadmin', 'Moderator', 'Author'].map((role) => (
                              <SelectItem key={role} value={role}>
                                {role}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </td>
                      <td className="px-4 py-2 min-w-[180px]">
                        <TextInput
                          type="number"
                          sizing="sm"
                          value={newUser.age}
                          onChange={(e: { target: { value: any } }) =>
                            setNewUser((prev) => ({
                              ...prev,
                              age: Number(e.target.value),
                            }))
                          }
                          className="!form-control"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <TextInput
                          sizing="sm"
                          value={newUser.phone}
                          onChange={(e: { target: { value: any } }) =>
                            setNewUser((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          placeholder="Phone"
                          className="!form-control"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <TextInput
                          sizing="sm"
                          value={newUser.email}
                          onChange={(e: { target: { value: any } }) =>
                            setNewUser((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          placeholder="Email"
                          className="!form-control"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex items-center gap-2">
                          <Button
                            size="small"
                            onClick={() => {
                              const id = uniqueId();
                              setUserData((prev) => [...prev, { ...newUser, id } as UserType]);
                              setNewUser({
                                userName: '',
                                role: 'User',
                                age: 0,
                                phone: '',
                                email: '',
                                avatar: '/images/profile/jason.svg',
                              });
                              setShowNewUserRow(false);
                            }}
                            disabled={!newUser.userName || !newUser.email}
                            className="p-1.5 rounded-full bg-transparent dark:bg-transparent hover:bg-lightprimary dark:hover:bg-darkprimary"
                          >
                            {newUser.userName && newUser.email ? (
                              <Icon
                                icon={'solar:check-read-linear'}
                                width={20}
                                height={20}
                                className="text-success"
                              />
                            ) : (
                              <Icon
                                icon={'solar:check-read-linear'}
                                width={20}
                                height={20}
                                className="text-error"
                              />
                            )}
                          </Button>
                          <Button
                            size="small"
                            onClick={() => {
                              setShowNewUserRow(false);
                              setNewUser({
                                userName: '',
                                role: 'User',
                                age: 0,
                                phone: '',
                                email: '',
                                avatar: '/images/profile/jason.svg',
                              });
                            }}
                            className="p-1.5 rounded-full bg-transparent dark:bg-transparent hover:bg-lighterror dark:hover:bg-lighterror"
                          >
                            <Icon
                              icon={'solar:close-circle-linear'}
                              width={20}
                              height={20}
                              className="text-error"
                            />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )}
                  {table.getRowModel().rows.length === 0 ? (
                    <tr>
                      <td colSpan={visibleColumns.length} className="text-center py-4">
                        No orders found.
                      </td>
                    </tr>
                  ) : (
                    table.getRowModel().rows.map((row) => (
                      <React.Fragment key={row.id}>
                        <tr className="border-b last:border-b-0 border-ld">
                          {row.getVisibleCells().map((cell) => (
                            <td
                              key={cell.id}
                              className={`px-4 py-2 ${
                                cell.column.id === 'userName' || cell.column.id === 'phone'
                                  ? 'min-w-[180px]'
                                  : ''
                              }`}
                            >
                              {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                          ))}
                        </tr>
                      </React.Fragment>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Pagination Controls */}
        {table.getPageCount() > 0 ? (
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 gap-3">
            {/* Page Size Selector */}
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted dark:text-lightgray">Show</p>
              <Select
                value={String(table.getState().pagination.pageSize)}
                onValueChange={(value) => table.setPageSize(Number(value))}
              >
                <SelectTrigger className="w-fit" aria-label="Select number of rows per page">
                  <SelectValue placeholder="Rows per page" />
                </SelectTrigger>
                <SelectContent>
                  {[3, 10, 20, 30, 40, 50].map((pageSize) => (
                    <SelectItem key={pageSize} value={String(pageSize)}>
                      {pageSize}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-muted dark:text-lightgray">per page</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Page Summary */}
              <div>
                <p className="text-sm font-normal text-muted dark:text-lightgray">
                  {table.getRowModel().rows.length > 0
                    ? `${
                        table.getState().pagination.pageIndex *
                          table.getState().pagination.pageSize +
                        1
                      }-${Math.min(
                        (table.getState().pagination.pageIndex + 1) *
                          table.getState().pagination.pageSize,
                        table.getFilteredRowModel().rows.length,
                      )} of ${table.getFilteredRowModel().rows.length}`
                    : `0 of 0`}
                </p>
              </div>

              {/* Custom Pagination Controls */}
              <div className="flex items-center gap-2">
                <Icon
                  icon="solar:arrow-left-line-duotone"
                  className={`text-dark dark:text-white hover:text-primary cursor-pointer ${
                    table.getState().pagination.pageIndex === 0
                      ? 'opacity-50 !cursor-not-allowed'
                      : ''
                  }`}
                  width={20}
                  height={20}
                  onClick={() => table.previousPage()}
                />
                <span className="w-8 h-8 bg-lightprimary text-primary flex items-center justify-center rounded-md dark:bg-darkprimary dark:text-white text-sm font-normal">
                  {table.getState().pagination.pageIndex + 1}
                </span>
                <Icon
                  icon="solar:arrow-right-line-duotone"
                  className={`text-dark dark:text-white hover:text-primary cursor-pointer ${
                    table.getState().pagination.pageIndex + 1 === table.getPageCount()
                      ? 'opacity-50 !cursor-not-allowed'
                      : ''
                  }`}
                  width={20}
                  height={20}
                  onClick={() =>
                    table.getState().pagination.pageIndex + 1 < table.getPageCount() &&
                    table.nextPage()
                  }
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </CardBox>
  );
}

export default UserDataTable;

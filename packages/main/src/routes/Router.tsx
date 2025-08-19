// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Children, lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router';
import Loadable from '../layouts/full/shared/loadable/Loadable';
// import { element } from 'prop-types';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));
const ComponentLayout = Loadable(lazy(() => import('../layouts/componentpage/ComponentLayout')));

/* ***Dashboard**** */
// Dashboards
const EcommerceDashboard = Loadable(lazy(() => import('../views/dashboards/Ecommerce')));
const Analytics = Loadable(lazy(() => import('../views/dashboards/Analytics')));
const Modern = Loadable(lazy(() => import('../views/dashboards/Modern')));

/* ****Apps***** */
const Contact = Loadable(lazy(() => import('../views/apps/contact/Contact')));
const Ecommerce = Loadable(lazy(() => import('../views/apps/eCommerce/Ecommerce')));
const EcommerceDetail = Loadable(lazy(() => import('../views/apps/eCommerce/EcommerceDetail')));
const EcommerceAddProduct = Loadable(
  lazy(() => import('../views/apps/eCommerce/EcommerceAddProduct')),
);
const EcommerceEditProduct = Loadable(
  lazy(() => import('../views/apps/eCommerce/EcommerceEditProduct')),
);
const EcomProductList = Loadable(lazy(() => import('../views/apps/eCommerce/EcomProductList')));
const EcomProductCheckout = Loadable(
  lazy(() => import('../views/apps/eCommerce/EcommerceCheckout')),
);
const Blog = Loadable(lazy(() => import('../views/apps/blog/Blog')));
const BlogDetail = Loadable(lazy(() => import('../views/apps/blog/BlogDetail')));
const BlogAdd = Loadable(lazy(() => import('../views/apps/blog/BlogAdd')));
const BlogEdit = Loadable(lazy(() => import('../views/apps/blog/BlogEdit')));

const Chats = Loadable(lazy(() => import('../views/apps/chat/Chats')));
const UserProfile = Loadable(lazy(() => import('../views/apps/user-profile/UserProfile')));
const Followers = Loadable(lazy(() => import('../views/apps/user-profile/Followers')));
const Friends = Loadable(lazy(() => import('../views/apps/user-profile/Friends')));
const Gallery = Loadable(lazy(() => import('../views/apps/user-profile/Gallery')));
const InvoiceList = Loadable(lazy(() => import('../views/apps/invoice/List')));
const InvoiceCreate = Loadable(lazy(() => import('../views/apps/invoice/Create')));
const InvoiceDetail = Loadable(lazy(() => import('../views/apps/invoice/Detail')));
const InvoiceEdit = Loadable(lazy(() => import('../views/apps/invoice/Edit')));
const Notes = Loadable(lazy(() => import('../views/apps/notes/Notes')));
const Calendar = Loadable(lazy(() => import('../views/apps/calendar/BigCalendar')));
const Email = Loadable(lazy(() => import('../views/apps/email/Email')));
const Tickets = Loadable(lazy(() => import('../views/apps/tickets/Tickets')));
const CreateTickets = Loadable(lazy(() => import('../views/apps/tickets/CreateTickets')));
const Kanban = Loadable(lazy(() => import('../views/apps/kanban/Kanban')));
const ChatAi = Loadable(lazy(() => import('../views/apps/chat-ai/ChatAi')));
const ImageAI = Loadable(lazy(() => import('../views/apps/image-ai/ImageAI')));

// forms
const FormLayouts = Loadable(lazy(() => import('../views/forms/FormLayouts')));
const FormCustom = Loadable(lazy(() => import('../views/forms/FormCustom')));
const FormHorizontal = Loadable(lazy(() => import('../views/forms/FormHorizontal')));
const FormVertical = Loadable(lazy(() => import('../views/forms/FormVertical')));
const FormValidation = Loadable(lazy(() => import('../views/forms/FormValidation')));
const FormElements = Loadable(lazy(() => import('../views/forms/FormElements')));

// theme pages
const RollbaseCASL = Loadable(lazy(() => import('../views/pages/RollbaseCASL')));
const Faq = Loadable(lazy(() => import('../views/pages/Faq')));
const Pricing = Loadable(lazy(() => import('../views/pages/Pricing')));
const AccountSetting = Loadable(lazy(() => import('../views/pages/AccountSetting')));
const Apikeys = Loadable(lazy(() => import('../views/pages/Apikeys')));
const Integrations = Loadable(lazy(() => import('../views/pages/Integration')));

//Shadcn Forms
const ShadcnInput = Loadable(lazy(() => import('../views/shadcn-form/ShadcnInput')));
const ShadcnCheckbox = Loadable(lazy(() => import('../views/shadcn-form/ShadcnCheckbox')));
const ShadcnRadio = Loadable(lazy(() => import('../views/shadcn-form/ShadcnRadio')));
const ShadcnSelect = Loadable(lazy(() => import('../views/shadcn-form/ShadcnSelect')));

// //Headless  Forms
const HeadlessButton = Loadable(lazy(() => import('../views/headless-form/ButtonForm')));
const HeadlessCheckbox = Loadable(lazy(() => import('../views/headless-form/CheckboxForm')));
const HeadlessCombobox = Loadable(lazy(() => import('../views/headless-form/ComboboxForm')));
const HeadlessFieldset = Loadable(lazy(() => import('../views/headless-form/FieldsetForm')));
const HeadlessInput = Loadable(lazy(() => import('../views/headless-form/InputForm')));
const HeadlessListbox = Loadable(lazy(() => import('../views/headless-form/ListboxForm')));
const HeadlessRadio = Loadable(lazy(() => import('../views/headless-form/RadioGroupForm')));
const HeadlessSelect = Loadable(lazy(() => import('../views/headless-form/SelectForm')));
const HeadlessSwitch = Loadable(lazy(() => import('../views/headless-form/SwitchForm')));
const HeadlessTextarea = Loadable(lazy(() => import('../views/headless-form/TextareaForm')));

// widget
const WidgetCards = Loadable(lazy(() => import('../views/widgets/cards/WidgetCards')));
const WidgetBanners = Loadable(lazy(() => import('../views/widgets/banners/WidgetBanners')));
const WidgetCharts = Loadable(lazy(() => import('../views/widgets/charts/WidgetCharts')));

// authentication
const Login = Loadable(lazy(() => import('../views/authentication/auth1/Login')));
const Login2 = Loadable(lazy(() => import('../views/authentication/auth2/Login')));

const Register = Loadable(lazy(() => import('../views/authentication/auth1/Register')));
const Register2 = Loadable(lazy(() => import('../views/authentication/auth2/Register')));

const ForgotPassword = Loadable(lazy(() => import('../views/authentication/auth1/ForgotPassword')));
const ForgotPassword2 = Loadable(
  lazy(() => import('../views/authentication/auth2/ForgotPassword')),
);

const TwoSteps = Loadable(lazy(() => import('../views/authentication/auth1/TwoSteps')));
const TwoSteps2 = Loadable(lazy(() => import('../views/authentication/auth2/TwoSteps')));

const Maintainance = Loadable(lazy(() => import('../views/authentication/Maintainance')));
// const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')));

//Flowbite table
const FlowbiteBasicTable = Loadable(
  lazy(() => import('../views/flowbite-tables/FlowbiteBasicTable')),
);
const FlowbiteCheckboxTable = Loadable(
  lazy(() => import('../views/flowbite-tables/FlowbiteCheckboxTable')),
);
const FlowbiteHoverTable = Loadable(
  lazy(() => import('../views/flowbite-tables/FlowbiteHoverTable')),
);
const FlowbiteStripedTable = Loadable(
  lazy(() => import('../views/flowbite-tables/FlowbiteStripedTable')),
);

//shadcn table

const ShadcnTable = Loadable(lazy(() => import('../views/shadcn-tables/basic/ShadcnTable')));

//react tables
const ReactBasicTable = Loadable(lazy(() => import('../views/react-tables/basic/Basic')));
const ReactColumnVisibilityTable = Loadable(
  lazy(() => import('../views/react-tables/columnvisibility/Columnvisibility')),
);
const ReactDenseTable = Loadable(lazy(() => import('../views/react-tables/dense/Dense')));
const ReactDragDropTable = Loadable(lazy(() => import('../views/react-tables/drag-drop/DragDrop')));
const ReactEditableTable = Loadable(lazy(() => import('../views/react-tables/editable/Editable')));
const ReactEmptyTable = Loadable(lazy(() => import('../views/react-tables/empty/Empty')));
const ReactExpandingTable = Loadable(
  lazy(() => import('../views/react-tables/expanding/Expanding')),
);
const ReactFilterTable = Loadable(lazy(() => import('../views/react-tables/filtering/Filtering')));
const ReactPaginationTable = Loadable(
  lazy(() => import('../views/react-tables/pagination/Pagination')),
);
const ReactRowSelectionTable = Loadable(
  lazy(() => import('../views/react-tables/row-selection/RowSelection')),
);
const ReactSortingTable = Loadable(lazy(() => import('../views/react-tables/sorting/Sorting')));
const ReactStickyTable = Loadable(lazy(() => import('../views/react-tables/sticky/Sticky')));

const ReactOrderTable = Loadable(
  lazy(() => import('../views/react-tables/order-datatable/OrderTable')),
);
const ReactUserTable = Loadable(
  lazy(() => import('../views/react-tables/user-datatable/UserTable')),
);

// charts
const AreaChart = Loadable(lazy(() => import('../views/charts/AreaChart')));
const CandlestickChart = Loadable(lazy(() => import('../views/charts/CandlestickChart')));
const ColumnChart = Loadable(lazy(() => import('../views/charts/ColumnChart')));
const DoughnutChart = Loadable(lazy(() => import('../views/charts/DoughnutChart')));
const GredientChart = Loadable(lazy(() => import('../views/charts/GredientChart')));
const RadialbarChart = Loadable(lazy(() => import('../views/charts/RadialbarChart')));
const LineChart = Loadable(lazy(() => import('../views/charts/LineChart')));

// icons
const SolarIcon = Loadable(lazy(() => import('../views/icons/SolarIcon')));
const TablerIcon = Loadable(lazy(() => import('../views/icons/TablerIcon')));

// landingpage
const Landingpage = Loadable(lazy(() => import('../views/pages/landingpage/Landingpage')));

// Shadcn-ui
const ShadcnButton = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnButton')));
const ShadcnBadge = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnBadge')));
const ShadcnDropdown = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnDropdown')));
const ShadcnDialog = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnDialog')));
const ShadcnAlert = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnAlert')));
const ShadcnBreadcrumb = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnBreadcrumb')));
const ShadcnCurosel = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnCurosel')));
const ShadcnCard = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnCard')));
const ShadcnDatepicker = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnDatepicker')));
const ShadcnCombobox = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnCombobox')));
const ShadcnCollapsible = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnCollapsible')));
const ShadcnCommand = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnCommand')));
const ShadcnSkeleton = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnSkeleton')));
const ShadcnAvatar = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnAvatar')));
const ShadcnTooltip = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnTooltip')));
const ShadcnAccordion = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnAccordion')));
const ShadcnTab = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnTab')));
const ShadcnProgress = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnProgress')));
const ShadcnDrawer = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnDrawer')));
const ShadcnToast = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnToast')));
const ShadcnUiInput = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnInput')));
const ShadcnUiCheckbox = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnCheckbox')));
const ShadcnUiRadio = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnRadio')));
const ShadcnUiSelect = Loadable(lazy(() => import('../views/shadcn-ui/ShadcnSelect')));

// shadcn chart
const ShadcnArearChart = Loadable(lazy(() => import('../views/shadcn-chart/AreaChart')));
const ShadcnBarChart = Loadable(lazy(() => import('../views/shadcn-chart/BarChart')));
const ShadcnLineChart = Loadable(lazy(() => import('../views/shadcn-chart/LineChart')));
const ShadcnPieChart = Loadable(lazy(() => import('../views/shadcn-chart/PieChart')));
const ShadcnRadarChart = Loadable(lazy(() => import('../views/shadcn-chart/RadarChart')));
const ShadcnRadialChart = Loadable(lazy(() => import('../views/shadcn-chart/RadialChart')));

// headless-ui
const Dialog = Loadable(lazy(() => import('../views/headless-ui/Dialog')));
const Disclosure = Loadable(lazy(() => import('../views/headless-ui/Disclosure')));
const Dropdown = Loadable(lazy(() => import('../views/headless-ui/Dropdown')));
const Popover = Loadable(lazy(() => import('../views/headless-ui/Popover')));
const Tabs = Loadable(lazy(() => import('../views/headless-ui/Tabs')));
const Transition = Loadable(lazy(() => import('../views/headless-ui/Transition')));
const HeadlessUiButton = Loadable(lazy(() => import('../views/headless-ui/ButtonForm')));
const HeadlessUiCheckbox = Loadable(lazy(() => import('../views/headless-ui/CheckboxForm')));
const HeadlessUiCombobox = Loadable(lazy(() => import('../views/headless-ui/ComboboxForm')));
const HeadlessUiFieldset = Loadable(lazy(() => import('../views/headless-ui/FieldsetForm')));
const HeadlessUiInput = Loadable(lazy(() => import('../views/headless-ui/InputForm')));
const HeadlessUiListbox = Loadable(lazy(() => import('../views/headless-ui/ListboxForm')));
const HeadlessUiRadio = Loadable(lazy(() => import('../views/headless-ui/RadioGroupForm')));
const HeadlessUiSelect = Loadable(lazy(() => import('../views/headless-ui/SelectForm')));
const HeadlessUiSwitch = Loadable(lazy(() => import('../views/headless-ui/SwitchForm')));
const HeadlessUiTextarea = Loadable(lazy(() => import('../views/headless-ui/TextareaForm')));

// ui components
const FlowbiteAccordion = Loadable(lazy(() => import('../views/ui-components/FlowbiteAccordion')));
const FlowbiteAlert = Loadable(lazy(() => import('../views/ui-components/FlowbiteAlert')));
const FlowbiteAvatar = Loadable(lazy(() => import('../views/ui-components/FlowbiteAvatar')));
const FlowbiteBadge = Loadable(lazy(() => import('../views/ui-components/FlowbiteBadge')));
const FlowbiteBanner = Loadable(lazy(() => import('../views/ui-components/FlowbiteBanner')));
const FlowbiteBreadcrumb = Loadable(
  lazy(() => import('../views/ui-components/FlowbiteBreadcrumb')),
);
const FlowbiteButtonGroup = Loadable(
  lazy(() => import('../views/ui-components/FlowbiteButtonGroup')),
);
const FlowbiteButtons = Loadable(lazy(() => import('../views/ui-components/FlowbiteButtons')));
const FlowbiteCard = Loadable(lazy(() => import('../views/ui-components/FlowbiteCard')));
const FlowbiteCarousel = Loadable(lazy(() => import('../views/ui-components/FlowbiteCarousel')));
const FlowbiteDatePicker = Loadable(
  lazy(() => import('../views/ui-components/FlowbiteDatePicker')),
);
const FlowbiteDrawer = Loadable(lazy(() => import('../views/ui-components/FlowbiteDrawer')));
const FlowbiteDropdown = Loadable(lazy(() => import('../views/ui-components/FlowbiteDropdown')));
const FlowbiteFooter = Loadable(lazy(() => import('../views/ui-components/FlowbiteFooter')));
const FlowbiteKbd = Loadable(lazy(() => import('../views/ui-components/FlowbiteKbd')));
const FlowbiteListgroup = Loadable(lazy(() => import('../views/ui-components/FlowbiteListgroup')));
const FlowbiteMegamenu = Loadable(lazy(() => import('../views/ui-components/FlowbiteMegamenu')));
const FlowbiteModals = Loadable(lazy(() => import('../views/ui-components/FlowbiteModals')));
const FlowbiteNavbar = Loadable(lazy(() => import('../views/ui-components/FlowbiteNavbar')));
const FlowbitePagination = Loadable(
  lazy(() => import('../views/ui-components/FlowbitePagination')),
);
const FlowbitePopover = Loadable(lazy(() => import('../views/ui-components/FlowbitePopover')));
const FlowbiteProgressbar = Loadable(
  lazy(() => import('../views/ui-components/FlowbiteProgressbar')),
);
const FlowbiteRating = Loadable(lazy(() => import('../views/ui-components/FlowbiteRating')));
const FlowbiteSidebar = Loadable(lazy(() => import('../views/ui-components/FlowbiteSidebar')));
const FlowbiteSpinner = Loadable(lazy(() => import('../views/ui-components/FlowbiteSpinner')));
const FlowbiteTab = Loadable(lazy(() => import('../views/ui-components/FlowbiteTab')));
const FlowbiteTables = Loadable(lazy(() => import('../views/ui-components/FlowbiteTables')));
const FlowbiteTimeline = Loadable(lazy(() => import('../views/ui-components/FlowbiteTimeline')));
const FlowbiteToast = Loadable(lazy(() => import('../views/ui-components/FlowbiteToast')));
const FlowbiteTooltip = Loadable(lazy(() => import('../views/ui-components/FlowbiteTooltip')));
const FlowbiteTypography = Loadable(
  lazy(() => import('../views/ui-components/FlowbiteTypography')),
);
const FlowbiteCheckbox = Loadable(lazy(() => import('../views/ui-components/FlowbiteCheckbox')));
const FlowbiteRadio = Loadable(lazy(() => import('../views/ui-components/FlowbiteRadio')));
const FlowbiteToggleSwitch = Loadable(
  lazy(() => import('../views/ui-components/FlowbiteToggleSwitch')),
);
const FlowbiteInput = Loadable(lazy(() => import('../views/ui-components/FlowbiteInput')));

const Error = Loadable(lazy(() => import('../views/authentication/Error')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', exact: true, element: <Analytics /> },
      { path: '/dashboards/eCommerce', exact: true, element: <EcommerceDashboard /> },
      { path: '/dashboards/modern', exact: true, element: <Modern /> },

      // { path: '/', exact: true, element: <SamplePage /> },
      { path: '*', element: <Navigate to="/auth/404" /> },

      { path: '/apps/contacts', element: <Contact /> },
      { path: '/apps/ecommerce/shop', element: <Ecommerce /> },
      { path: '/apps/ecommerce/list', element: <EcomProductList /> },
      { path: '/apps/ecommerce/checkout', element: <EcomProductCheckout /> },
      { path: '/apps/ecommerce/addproduct', element: <EcommerceAddProduct /> },
      { path: '/apps/ecommerce/editproduct', element: <EcommerceEditProduct /> },
      { path: '/apps/ecommerce/detail/:id', element: <EcommerceDetail /> },
      { path: '/apps/blog/post', element: <Blog /> },
      { path: '/apps/blog/detail/:id', element: <BlogDetail /> },
      { path: '/apps/blog/addblog', element: <BlogAdd /> },
      { path: '/apps/blog/editblog', element: <BlogEdit /> },

      { path: '/apps/chat-ai', element: <ChatAi /> },
      { path: '/apps/image-ai', element: <ImageAI /> },
      { path: '/apps/chats', element: <Chats /> },
      { path: '/apps/user-profile/profile', element: <UserProfile /> },
      { path: '/apps/user-profile/followers', element: <Followers /> },
      { path: '/apps/user-profile/friends', element: <Friends /> },
      { path: '/apps/user-profile/gallery', element: <Gallery /> },
      { path: '/apps/invoice/list', element: <InvoiceList /> },
      { path: '/apps/invoice/create', element: <InvoiceCreate /> },
      { path: '/apps/invoice/detail/:id', element: <InvoiceDetail /> },
      { path: '/apps/invoice/edit/:id', element: <InvoiceEdit /> },
      { path: '/apps/notes', element: <Notes /> },
      { path: '/apps/calendar', element: <Calendar /> },
      { path: '/apps/email', element: <Email /> },
      { path: '/apps/tickets', element: <Tickets /> },
      { path: '/apps/tickets/create', element: <CreateTickets /> },
      { path: '/apps/kanban', element: <Kanban /> },

      { path: '/theme-pages/casl', element: <RollbaseCASL /> },
      { path: '/theme-pages/pricing', element: <Pricing /> },
      { path: '/theme-pages/faq', element: <Faq /> },
      { path: '/theme-pages/account-settings', element: <AccountSetting /> },
      { path: '/theme-pages/apikey', element: <Apikeys /> },
      { path: '/theme-pages/integration', element: <Integrations /> },

      { path: '/forms/form-elements', element: <FormElements /> },
      { path: '/forms/form-validation', element: <FormValidation /> },
      { path: '/forms/form-horizontal', element: <FormHorizontal /> },
      { path: '/forms/form-vertical', element: <FormVertical /> },
      { path: '/forms/form-layouts', element: <FormLayouts /> },
      { path: '/forms/form-custom', element: <FormCustom /> },

      { path: '/shadcn-form/input', element: <ShadcnInput /> },
      { path: '/shadcn-form/select', element: <ShadcnSelect /> },
      { path: '/shadcn-form/checkbox', element: <ShadcnCheckbox /> },
      { path: '/shadcn-form/radio', element: <ShadcnRadio /> },

      { path: '/headless-form/buttons', element: <HeadlessButton /> },
      { path: '/headless-form/checkbox', element: <HeadlessCheckbox /> },
      { path: '/headless-form/combobox', element: <HeadlessCombobox /> },
      { path: '/headless-form/fieldset', element: <HeadlessFieldset /> },
      { path: '/headless-form/input', element: <HeadlessInput /> },
      { path: '/headless-form/listbox', element: <HeadlessListbox /> },
      { path: '/headless-form/radiogroup', element: <HeadlessRadio /> },
      { path: '/headless-form/select', element: <HeadlessSelect /> },
      { path: '/headless-form/switch', element: <HeadlessSwitch /> },
      { path: '/headless-form/textarea', element: <HeadlessTextarea /> },

      { path: '/widgets/cards', element: <WidgetCards /> },
      { path: '/widgets/banners', element: <WidgetBanners /> },
      { path: '/widgets/charts', element: <WidgetCharts /> },

      { path: '/tables/basic', element: <FlowbiteBasicTable /> },
      { path: '/tables/checkbox-table', element: <FlowbiteCheckboxTable /> },
      { path: '/tables/hover-table', element: <FlowbiteHoverTable /> },
      { path: '/tables/striped-row', element: <FlowbiteStripedTable /> },

      { path: '/shadcn-tables/basic', element: <ShadcnTable /> },

      { path: '/react-tables/basic', element: <ReactBasicTable /> },
      { path: '/react-tables/columnvisibility', element: <ReactColumnVisibilityTable /> },
      { path: '/react-tables/drag-drop', element: <ReactDragDropTable /> },
      { path: '/react-tables/dense', element: <ReactDenseTable /> },
      { path: '/react-tables/editable', element: <ReactEditableTable /> },
      { path: '/react-tables/empty', element: <ReactEmptyTable /> },
      { path: '/react-tables/expanding', element: <ReactExpandingTable /> },
      { path: '/react-tables/filtering', element: <ReactFilterTable /> },
      { path: '/react-tables/pagination', element: <ReactPaginationTable /> },
      { path: '/react-tables/row-selection', element: <ReactRowSelectionTable /> },
      { path: '/react-tables/sorting', element: <ReactSortingTable /> },
      { path: '/react-tables/sticky', element: <ReactStickyTable /> },
      { path: '/react-tables/order-datatable', element: <ReactOrderTable /> },
      { path: '/react-tables/user-datatable', element: <ReactUserTable /> },

      { path: '/charts/area', element: <AreaChart /> },
      { path: '/charts/line', element: <LineChart /> },
      { path: '/charts/gradient', element: <GredientChart /> },
      { path: '/charts/candlestick', element: <CandlestickChart /> },
      { path: '/charts/column', element: <ColumnChart /> },
      { path: '/charts/doughnut', element: <DoughnutChart /> },
      { path: '/charts/radialbar', element: <RadialbarChart /> },

      { path: '/icons/iconify', element: <SolarIcon /> },
      { path: '/icons/tabler', element: <TablerIcon /> },

      /*Shadcn-ui*/
      { path: '/shadcn-ui/buttons', element: <ShadcnButton /> },
      { path: '/shadcn-ui/badge', element: <ShadcnBadge /> },
      { path: '/shadcn-ui/dropdown', element: <ShadcnDropdown /> },
      { path: '/shadcn-ui/dialogs', element: <ShadcnDialog /> },
      { path: '/shadcn-ui/alert', element: <ShadcnAlert /> },
      { path: '/shadcn-ui/toast', element: <ShadcnToast /> },
      { path: '/shadcn-ui/breadcrumb', element: <ShadcnBreadcrumb /> },
      { path: '/shadcn-ui/carousel', element: <ShadcnCurosel /> },
      { path: '/shadcn-ui/card', element: <ShadcnCard /> },
      { path: '/shadcn-ui/datepicker', element: <ShadcnDatepicker /> },
      { path: '/shadcn-ui/combobox', element: <ShadcnCombobox /> },
      { path: '/shadcn-ui/collapsible', element: <ShadcnCollapsible /> },
      { path: '/shadcn-ui/command', element: <ShadcnCommand /> },
      { path: '/shadcn-ui/skeleton', element: <ShadcnSkeleton /> },
      { path: '/shadcn-ui/avatar', element: <ShadcnAvatar /> },
      { path: '/shadcn-ui/tooltip', element: <ShadcnTooltip /> },
      { path: '/shadcn-ui/accordion', element: <ShadcnAccordion /> },
      { path: '/shadcn-ui/tab', element: <ShadcnTab /> },
      { path: '/shadcn-ui/progressbar', element: <ShadcnProgress /> },
      { path: '/shadcn-ui/drawer', element: <ShadcnDrawer /> },

      { path: '/headless-form/buttons', element: <HeadlessButton /> },
      { path: '/headless-form/checkbox', element: <HeadlessCheckbox /> },
      { path: '/headless-form/combobox', element: <HeadlessCombobox /> },
      { path: '/headless-form/fieldset', element: <HeadlessFieldset /> },
      { path: '/headless-form/input', element: <HeadlessInput /> },
      { path: '/headless-form/listbox', element: <HeadlessListbox /> },
      { path: '/headless-form/radiogroup', element: <HeadlessRadio /> },
      { path: '/headless-form/select', element: <HeadlessSelect /> },
      { path: '/headless-form/switch', element: <HeadlessSwitch /> },
      { path: '/headless-form/textarea', element: <HeadlessTextarea /> },

      { path: '/ui-components/accordion', element: <FlowbiteAccordion /> },
      { path: '/ui-components/alert', element: <FlowbiteAlert /> },
      { path: '/ui-components/avatar', element: <FlowbiteAvatar /> },
      { path: '/ui-components/badge', element: <FlowbiteBadge /> },
      { path: '/ui-components/banner', element: <FlowbiteBanner /> },
      { path: '/ui-components/breadcrumb', element: <FlowbiteBreadcrumb /> },
      { path: '/ui-components/button-group', element: <FlowbiteButtonGroup /> },
      { path: '/ui-components/buttons', element: <FlowbiteButtons /> },
      { path: '/ui-components/card', element: <FlowbiteCard /> },
      { path: '/ui-components/carousel', element: <FlowbiteCarousel /> },
      { path: '/ui-components/datepicker', element: <FlowbiteDatePicker /> },
      { path: '/ui-components/drawer', element: <FlowbiteDrawer /> },
      { path: '/ui-components/dropdown', element: <FlowbiteDropdown /> },
      { path: '/ui-components/footer', element: <FlowbiteFooter /> },
      { path: '/ui-components/kbd', element: <FlowbiteKbd /> },
      { path: '/ui-components/listgroup', element: <FlowbiteListgroup /> },
      { path: '/ui-components/megamenu', element: <FlowbiteMegamenu /> },
      { path: '/ui-components/modals', element: <FlowbiteModals /> },
      { path: '/ui-components/navbar', element: <FlowbiteNavbar /> },
      { path: '/ui-components/pagination', element: <FlowbitePagination /> },
      { path: '/ui-components/popover', element: <FlowbitePopover /> },
      { path: '/ui-components/progressbar', element: <FlowbiteProgressbar /> },
      { path: '/ui-components/rating', element: <FlowbiteRating /> },
      { path: '/ui-components/sidebar', element: <FlowbiteSidebar /> },
      { path: '/ui-components/spinner', element: <FlowbiteSpinner /> },
      { path: '/ui-components/tab', element: <FlowbiteTab /> },
      { path: '/ui-components/tables', element: <FlowbiteTables /> },
      { path: '/ui-components/timeline', element: <FlowbiteTimeline /> },
      { path: '/ui-components/toast', element: <FlowbiteToast /> },
      { path: '/ui-components/tooltip', element: <FlowbiteTooltip /> },
      { path: '/ui-components/typography', element: <FlowbiteTypography /> },

      { path: '/headless-ui/dialog', element: <Dialog /> },
      { path: '/headless-ui/disclosure', element: <Disclosure /> },
      { path: '/headless-ui/dropdown', element: <Dropdown /> },
      { path: '/headless-ui/popover', element: <Popover /> },
      { path: '/headless-ui/tabs', element: <Tabs /> },
      { path: '/headless-ui/transition', element: <Transition /> },
    ],
  },
  {
    path: '/',
    element: <ComponentLayout />,
    children: [
      // flowbite
      { path: '/components/flowbite/accordion', element: <FlowbiteAccordion /> },
      { path: '/components/flowbite/alert', element: <FlowbiteAlert /> },
      { path: '/components/flowbite/avatar', element: <FlowbiteAvatar /> },
      { path: '/components/flowbite/badge', element: <FlowbiteBadge /> },
      { path: '/components/flowbite/banner', element: <FlowbiteBanner /> },
      { path: '/components/flowbite/breadcrumb', element: <FlowbiteBreadcrumb /> },
      { path: '/components/flowbite/button-group', element: <FlowbiteButtonGroup /> },
      { path: '/components/flowbite/buttons', element: <FlowbiteButtons /> },
      { path: '/components/flowbite/card', element: <FlowbiteCard /> },
      { path: '/components/flowbite/checkbox', element: <FlowbiteCheckbox /> },
      { path: '/components/flowbite/carousel', element: <FlowbiteCarousel /> },
      { path: '/components/flowbite/datepicker', element: <FlowbiteDatePicker /> },
      { path: '/components/flowbite/drawer', element: <FlowbiteDrawer /> },
      { path: '/components/flowbite/dropdown', element: <FlowbiteDropdown /> },
      { path: '/components/flowbite/footer', element: <FlowbiteFooter /> },
      { path: '/components/flowbite/input', element: <FlowbiteInput /> },
      { path: '/components/flowbite/kbd', element: <FlowbiteKbd /> },
      { path: '/components/flowbite/listgroup', element: <FlowbiteListgroup /> },
      { path: '/components/flowbite/megamenu', element: <FlowbiteMegamenu /> },
      { path: '/components/flowbite/modals', element: <FlowbiteModals /> },
      { path: '/components/flowbite/navbar', element: <FlowbiteNavbar /> },
      { path: '/components/flowbite/pagination', element: <FlowbitePagination /> },
      { path: '/components/flowbite/popover', element: <FlowbitePopover /> },
      { path: '/components/flowbite/toggle-switch', element: <FlowbiteToggleSwitch /> },
      { path: '/components/flowbite/progressbar', element: <FlowbiteProgressbar /> },
      { path: '/components/flowbite/rating', element: <FlowbiteRating /> },
      { path: '/components/flowbite/radio', element: <FlowbiteRadio /> },
      { path: '/components/flowbite/sidebar', element: <FlowbiteSidebar /> },
      { path: '/components/flowbite/spinner', element: <FlowbiteSpinner /> },
      { path: '/components/flowbite/tab', element: <FlowbiteTab /> },
      { path: '/components/flowbite/tables', element: <FlowbiteTables /> },
      { path: '/components/flowbite/timeline', element: <FlowbiteTimeline /> },
      { path: '/components/flowbite/toast', element: <FlowbiteToast /> },
      { path: '/components/flowbite/tooltip', element: <FlowbiteTooltip /> },
      { path: '/components/flowbite/typography', element: <FlowbiteTypography /> },
      // shadcn
      { path: '/components/shadcn/buttons', element: <ShadcnButton /> },
      { path: '/components/shadcn/badge', element: <ShadcnBadge /> },
      { path: '/components/shadcn/dropdown', element: <ShadcnDropdown /> },
      { path: '/components/shadcn/dialogs', element: <ShadcnDialog /> },
      { path: '/components/shadcn/alert', element: <ShadcnAlert /> },
      { path: '/components/shadcn/toast', element: <ShadcnToast /> },
      { path: '/components/shadcn/breadcrumb', element: <ShadcnBreadcrumb /> },
      { path: '/components/shadcn/carousel', element: <ShadcnCurosel /> },
      { path: '/components/shadcn/card', element: <ShadcnCard /> },
      { path: '/components/shadcn/datepicker', element: <ShadcnDatepicker /> },
      { path: '/components/shadcn/combobox', element: <ShadcnCombobox /> },
      { path: '/components/shadcn/collapsible', element: <ShadcnCollapsible /> },
      { path: '/components/shadcn/command', element: <ShadcnCommand /> },
      { path: '/components/shadcn/skeleton', element: <ShadcnSkeleton /> },
      { path: '/components/shadcn/avatar', element: <ShadcnAvatar /> },
      { path: '/components/shadcn/tooltip', element: <ShadcnTooltip /> },
      { path: '/components/shadcn/accordion', element: <ShadcnAccordion /> },
      { path: '/components/shadcn/tab', element: <ShadcnTab /> },
      { path: '/components/shadcn/progressbar', element: <ShadcnProgress /> },
      { path: '/components/shadcn/drawer', element: <ShadcnDrawer /> },
      { path: '/components/shadcn/toast', element: <ShadcnToast /> },
      //
      { path: '/components/shadcn/input', element: <ShadcnUiInput /> },
      { path: '/components/shadcn/select', element: <ShadcnUiSelect /> },
      { path: '/components/shadcn/checkbox', element: <ShadcnUiCheckbox /> },
      { path: '/components/shadcn/radio', element: <ShadcnUiRadio /> },
      //
      { path: '/components/shadcn/area', element: <ShadcnArearChart /> },
      { path: '/components/shadcn/bar', element: <ShadcnBarChart /> },
      { path: '/components/shadcn/line', element: <ShadcnLineChart /> },
      { path: '/components/shadcn/pie', element: <ShadcnPieChart /> },
      { path: '/components/shadcn/radar', element: <ShadcnRadarChart /> },
      { path: '/components/shadcn/radial', element: <ShadcnRadialChart /> },
      // headlessui
      { path: '/components/headlessui/dialog', element: <Dialog /> },
      { path: '/components/headlessui/disclosure', element: <Disclosure /> },
      { path: '/components/headlessui/dropdown', element: <Dropdown /> },
      { path: '/components/headlessui/popover', element: <Popover /> },
      { path: '/components/headlessui/tabs', element: <Tabs /> },
      { path: '/components/headlessui/transition', element: <Transition /> },

      { path: '/components/headlessui/buttons', element: <HeadlessUiButton /> },
      { path: '/components/headlessui/checkbox', element: <HeadlessUiCheckbox /> },
      { path: '/components/headlessui/combobox', element: <HeadlessUiCombobox /> },
      { path: '/components/headlessui/fieldset', element: <HeadlessUiFieldset /> },
      { path: '/components/headlessui/input', element: <HeadlessUiInput /> },
      { path: '/components/headlessui/listbox', element: <HeadlessUiListbox /> },
      { path: '/components/headlessui/radiogroup', element: <HeadlessUiRadio /> },
      { path: '/components/headlessui/select', element: <HeadlessUiSelect /> },
      { path: '/components/headlessui/switch', element: <HeadlessUiSwitch /> },
      { path: '/components/headlessui/textarea', element: <HeadlessUiTextarea /> },
      { path: '/components/headlessui/buttons', element: <HeadlessUiButton /> },
      { path: '/components/headlessui/checkbox', element: <HeadlessUiCheckbox /> },
      { path: '/components/headlessui/combobox', element: <HeadlessUiCombobox /> },
      { path: '/components/headlessui/fieldset', element: <HeadlessUiFieldset /> },
      { path: '/components/headlessui/input', element: <HeadlessUiInput /> },
      { path: '/components/headlessui/listbox', element: <HeadlessUiListbox /> },
      { path: '/components/headlessui/radiogroup', element: <HeadlessUiRadio /> },
      { path: '/components/headlessui/select', element: <HeadlessUiSelect /> },
      { path: '/components/headlessui/switch', element: <HeadlessUiSwitch /> },
      { path: '/components/headlessui/textarea', element: <HeadlessUiTextarea /> },
    ],
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: '/landingpage', element: <Landingpage /> },

      { path: '/auth/auth1/login', element: <Login /> },
      { path: '/auth/auth2/login', element: <Login2 /> },
      { path: '/auth/auth1/register', element: <Register /> },
      { path: '/auth/auth2/register', element: <Register2 /> },
      { path: '/auth/auth1/forgot-password', element: <ForgotPassword /> },
      { path: '/auth/auth2/forgot-password', element: <ForgotPassword2 /> },

      { path: '/auth/auth1/two-steps', element: <TwoSteps /> },
      { path: '/auth/auth2/two-steps', element: <TwoSteps2 /> },

      { path: '/auth/maintenance', element: <Maintainance /> },

      { path: '404', element: <Error /> },
      { path: '/auth/404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

const router = createBrowserRouter(Router);

export default router;

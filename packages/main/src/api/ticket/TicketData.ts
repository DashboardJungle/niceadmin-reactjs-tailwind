import { Chance } from 'chance';

import { TicketType } from 'src/types/apps/ticket';
import { http, HttpResponse } from 'msw';

import emily from 'src/assets/images/profile/emily.svg';
import Juan from 'src/assets/images/profile/Juan.svg';
import ryan from 'src/assets/images/profile/ryan.svg';
import Reva from 'src/assets/images/profile/Reva.svg';
import Kiley from 'src/assets/images/profile/Kiley.svg';
import jason from 'src/assets/images/profile/jason.svg';

import Dalton from 'src/assets/images/profile/Dalton.svg';

const chance = new Chance();

export let TicketData: TicketType[] = [
  {
    Id: 1,
    ticketTitle: 'Sed ut perspiciatis unde omnis iste',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Label: 'error',
    thumb: emily,
    AgentName: 'Liam',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 2,
    ticketTitle: 'Consequuntur magni dolores eos qui ratione',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Pending',
    Label: 'warning',
    thumb: Kiley,
    AgentName: 'Steve',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 3,
    ticketTitle: 'Exercitationem ullam corporis',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Open',
    Label: 'success',
    thumb: jason,
    AgentName: 'Jack',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 4,
    ticketTitle: 'Sed ut perspiciatis unde omnis iste',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Label: 'error',
    thumb: Dalton,
    AgentName: 'Steve',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 5,
    ticketTitle: 'Exercitationem ullam corporis',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Label: 'error',
    thumb: Reva,
    AgentName: 'Liam',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 6,
    ticketTitle: 'Consequuntur magni dolores eos qui ratione',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Pending',
    Label: 'warning',
    thumb: Juan,
    AgentName: 'Jack',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 7,
    ticketTitle: 'Sed ut perspiciatis unde omnis iste',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Open',
    Label: 'success',
    thumb: ryan,
    AgentName: 'Steve',
    Date: chance.date(),
    deleted: false,
  },
  {
    Id: 8,
    ticketTitle: 'Consequuntur magni dolores eos qui ratione',
    ticketDescription:
      'ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos',
    Status: 'Closed',
    Label: 'error',
    thumb: jason,
    AgentName: 'John',
    Date: chance.date(),
    deleted: false,
  },
];

export const TicketHandlers = [
  // Mock GET request to retrieve Ticket data
  http.get('/api/data/ticket/TicketData', () => {
    try {
      return HttpResponse.json({ status: 200, msg: 'Success', data: TicketData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'Internal server error',
        error,
      });
    }
  }),

  // Mock DELETE endpoint for deleting a ticket
  http.delete('/api/data/ticket/delete', async ({ request }) => {
    try {
      const { id } = (await request.json()) as { id: any };
      const tickets = TicketData.map((ticket) =>
        ticket.Id === id ? { ...ticket, deleted: true } : ticket,
      );
      TicketData = tickets;
      return HttpResponse.json({ status: 200, msg: 'Success', data: TicketData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'Internal server error',
        error,
      });
    }
  }),

  // Mock POST endpoint for adding a ticket
  http.post('/api/data/ticket/add', async ({ request }) => {
    try {
      const newTicket = (await request.json()) as TicketType;
      TicketData.push(newTicket);
      return HttpResponse.json({ status: 200, msg: 'Success', data: TicketData });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'Internal server error',
        error,
      });
    }
  }),
];

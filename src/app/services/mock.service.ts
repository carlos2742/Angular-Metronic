import { Injectable } from '@angular/core';

export interface User {
  name: string;
  lastName: string;
  image: string;
  messages: { count: number };
  billings: { pending: number };
}

@Injectable()
export class MockService {

  constructor() { }

  get loggedUser() {
    const user: User = {
      name: 'Charles',
      lastName: 'Brown',
      image: './assets/media/users/300_12.jpg',
      messages: {
        count: 23
      },
      billings: {
        pending: 2
      }
    };
    return user;
  }

  get dataTable() {
    const data = [
      { created: '1/1/2016', link: 'drinks.me/256', destination: 'pernod-ricard.com/bran', hit: 303000, status: 'active', updated: '1/1/2016' },
      { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 50, status: 'inactive', updated: '3/7/2016' },
      { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 100, status: 'inactive', updated: '3/7/2016' },
      { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 5000, status: 'active', updated: '3/7/2016' },
      { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 150000, status: 'inactive', updated: '3/7/2016' },
      { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 30000, status: 'active', updated: '3/7/2016' },
      { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 1000000, status: 'inactive', updated: '3/7/2016' },
      { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 0, status: 'active', updated: '3/7/2016' },
      { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 5, status: 'inactive', updated: '3/7/2016' },
      { created: '2/5/2016', link: 'hola.me/3569', destination: 'health-ricard.com/bran', hit: 10, status: 'inactive', updated: '3/7/2016' },
      { created: '2/5/2016', link: 'google.com', destination: 'asd-qwet.com', hit: 20, status: 'active', updated: '3/7/2016' }
    ];
    return data;
  }

  get statistics() {
    const stats = {
      countries: this.countriesStats(),
      hitEvolution: this.hitEvolution(),
    };
    return stats;
  }

  get list() {
    let totalHits = 0;
    let activeLinks = 0;

    this.dataTable.forEach(item => {
      totalHits += item['hit'];
      if (item['status'] === 'active') {
        activeLinks++;
      }
    });

    return [
      {
        title: 'Total Hits',
        value: totalHits,
        color: 'kt-font-info'
      },
      {
        title: 'Active Links',
        value: activeLinks,
        color: 'kt-font-success'
      },
      {
        title: 'Unique Visitors',
        value: 50000,
        color: 'kt-font-danger'
      }
    ];
  }

  private countriesStats() {
    const countries = {
      labels: ['France', 'India', 'China', 'Unite State', 'Others'],
      datasets: [
        {
          ktBackgroundColor: ['kt-bg-success', 'kt-bg-warning', 'kt-bg-danger', 'kt-bg-info', 'kt-bg-brand'],
          backgroundColor: ['#1dc9b7', '#ffb822', '#fd397a', '#5578eb', '#374afb'],
          data: [
            15, 20, 25, 30, 25
          ]
        }
      ]
    };
    return countries;
  }

  private hitEvolution() {
    const evol = {
      labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8', 'Label 9', 'Label 10', 'Label 11', 'Label 12', 'Label 13', 'Label 14', 'Label 15', 'Label 16'],
      datasets: [
        {
          // label: 'dataset 1',
          backgroundColor: '#43bfa3',
          data: [
            15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20, 15, 10, 15, 20
          ]
        }, {
          // label: 'dataset 2',
          backgroundColor: '#f3f3fb',
          data: [
            15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20, 15, 10, 15, 20
          ]
        }
      ]
    };
    return evol;
  }

}

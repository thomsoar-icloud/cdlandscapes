import { Component } from '@angular/core';

import { ClientsPage } from '../clients/clients';
import { ContactPage } from '../contact/contact';
import { JobsPage } from '../jobs/jobs';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = JobsPage;
  tab2Root = ClientsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}

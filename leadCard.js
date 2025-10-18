
import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class LeadCard extends LightningElement {
    @api recordId;
    lead;
    @wire(getRecord, { recordId: '$recordId', fields: ['Lead.Name','Lead.Company','Lead.Status'] })
    wiredLead({ error, data }) {
        if (data) {
            this.lead = data.fields;
        }
    }
}

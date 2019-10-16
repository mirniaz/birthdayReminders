import { LightningElement, wire } from 'lwc';
import {getListUi} from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';

export default class BirthdayReminders extends LightningElement {
    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT,
        listViewApiName: 'Client Birthdays Next Month',
        sortBy: NAME_FIELD,
        pageSize:10
    })
    listView;

    get birthdays(){
        return this.listView.data.records.records;
    }
}
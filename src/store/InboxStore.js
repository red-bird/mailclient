import {makeAutoObservable} from "mobx";

export default class InboxStore {

     _input = [
        // {id: 1, subject: 'auf', message: 'hi', fromName: 'admin', toName: 'user', fromImportant: true, toImportant: true, date: "2010-05-03"},
        // {id: 2, subject: 'amogus', message: 'hello', fromName: 'user', toName: 'admin', fromImportant: false, toImportant: false, date: "2014-12-24"}
    ]

     _output = [

    ]

    isInput = true

    get input(): [] {
        return this._input;
    }

    setInput(value: Array) {
        this._input = value;
    }

    get output(): [] {
        return this._output;
    }

    setOutput(value: Array) {
        this._output = value;
    }

    constructor() {
        makeAutoObservable(this);
    }

}
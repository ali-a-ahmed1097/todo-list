export class Note {
    constructor(title, note) {
        this._title = title;
        this._note = note;
    };

    getTitle() { return this._title; };
    getNote() { console.log(this._note); return this._note; };
};

export class Todo {
    constructor(title, desc, priority, date, project) {
        this._title = title;
        this._desc = desc;
        this._priority = priority;
        this._date = date;
        this._project = project;
        this._completed = false;
        this._id = Math.floor(Math.random() * Number.MAX_VALUE);
    };

    getTitle() { return this._title; };
    getDesc() { return this._desc; };
    getPriority() { return this._priority; };
    getDate() { return this._date; };
    getProjectName() { return this._project; };
    isCompleted() { return this._completed; };
    setCompleted() { this._completed = !this._completed; };
    getId() { return this._id; };
};
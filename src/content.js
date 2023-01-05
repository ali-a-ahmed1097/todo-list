export class Note {
    constructor(title, note) {
        this._title = title;
        this._note = note;
    };

    getTitle() { return this._title; };
    getNote() { return this._note; };
};

export class Todo {
    constructor(title, desc, priority, date, project) {
        this._title = title;
        this._desc = desc;
        this._priority = priority;
        this._date = date;
        this._project = project;
        this._completed = false;
    };

    getTitle() { return this._title; };
    getDesc() { return this._desc; };
    getPriority() { return this._priority; };
    getDate() { return this._date; };
    getProjectName() { return this._project; };
    isCompleted() { return this._completed; };
    setCompleted() { this._completed = !this._completed; };
};
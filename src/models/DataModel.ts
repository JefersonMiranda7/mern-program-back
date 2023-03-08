import { IData } from '../interfaces/datamodel.interface';

export class DataModel<T> {
  private _records: IData<T>[];

  constructor() {
    this._records = [];
  }

  public loadData(data: T[]) {
    data.map(record => this.create(record));
  }

  private _createRecord(data: T) {
    let max: number = 1;
    if (this._records.length > 0) max = this._records[this._records.length - 1]._id + 1;
    
    const record = { _id: max, data };
    this._records.push(record);

    return record;
  }

  public create(record: T): Promise<IData<T>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (record) resolve(this._createRecord(record));
        else reject('Empty data');
      }, 500)
    })
  }

  public find(): Promise<IData<T>[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this._records);
      }, 500)
    })
  }

  public findById(id: number): Promise<IData<T>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const recordFound = this._records.find(record => record._id === id);
        if (recordFound) resolve(recordFound);
        else reject('Record not found');
      }, 500)
    })
  }

  public updateOneById(id: number, data: T): Promise<IData<T>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let recordFound: IData<T> | undefined;
        this._records = this._records.map(record => {
          if (record._id === id) {
            recordFound = { ...record, data };
            return recordFound;
          } else return record;
        })

        if (recordFound) resolve(recordFound);
        else reject('Record not found');
      }, 500)
    })
  }

  public deleteOneById(id: number): Promise<IData<T>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let recordFound: IData<T> | undefined = this._records.find(record => record._id === id);
        
        if (recordFound) {
          this._records = this._records.filter(record => record._id !== id)
          resolve(recordFound);
        } else reject ('Record not found');
      }, 500)
    })
  }
}
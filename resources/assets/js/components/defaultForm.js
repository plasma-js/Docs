import { FormBase } from '@plasma-js/plasma';

export default class Form extends FormBase {
  constructor(elm) {
    super(elm, {
      email: 'string|email',
      letterBullshit: 'string|required',
      letterHolyshit: 'string',
      letter2Holyshit: 'array|min(1)|required'
    });
  }

  submit(data) {
    console.log(data);
    console.log(this.model);
    console.log(this.schema);
  }
}

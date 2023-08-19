import { Property } from "../lib";
import Card from "./Card";

export default class EditableText {
  text: string;
  place: HTMLElement;
  card:Card;
  typeOfInput: string;

  div?: HTMLDivElement;

  p?: HTMLParagraphElement;
  input?: HTMLInputElement;

  saveButton?: HTMLButtonElement;

  property: Property;

  constructor(
    text: string,
    place: HTMLElement,
    card: Card,
    property: Property,
    typeOfInput: string
  ){
    this.text = text;
    this.place = place;
    this.card = card;
    this.property = property;
    this.typeOfInput = typeOfInput;
    this.render();
  }

  render() { 
    this.div = document.createElement('div');
    this.p = document.createElement('p');
    this.p.innerText = this.text;

    this.p.addEventListener('click', () => {
      this.showEditableTextArea.call(this);
    });

    this.div.append(this.p);
    this.place.append(this.div);

  }

  showEditableTextArea() {
    const prevText = this.text;

    this.input = document.createElement(this.typeOfInput) as HTMLInputElement;
    this.saveButton = document.createElement('button');
    this.p?.remove();
    this.input.value = prevText;
    this.saveButton.innerText = 'Save';
    this.saveButton.classList.add('btn-save');
    this.input.classList.add('comment');

    this.saveButton.addEventListener('click', () => {
      if(typeof(this.input?.value) == 'string' )
        this.text = this.input.value ;
      if(this.property === 'description'){
      this.card.state.description = this.input?.value as string;
      }
      if(this.property === 'text'){
         this.card.state.innerText = this.input?.value as string;
        }
      this.div?.remove();
      this.render();
    })
  }
}
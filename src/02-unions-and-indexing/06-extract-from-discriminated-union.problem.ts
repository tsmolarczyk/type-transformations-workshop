import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };


// we need to get the discriminator, in this case we can take the type as well as the event

// type ClickEvent = Extract<Event, {type: 'click'}>;
type ClickEvent = Extract<Event, {event: MouseEvent}>;


type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];

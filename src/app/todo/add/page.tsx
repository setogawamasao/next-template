"use client";
import { useState } from "react";
import styled from "styled-components";
import { DateTime } from "luxon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import {
  faPlus,
  faMagnifyingGlass,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { TodoItem, fetchTodo } from "@/services/todoService";

export default function AddForm() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [todoList, setTodoList] = useState<TodoItem[] | undefined>(undefined);
  registerLocale("ja", ja);

  const search = async (): Promise<void> => {
    const todoList = await fetchTodo();
    setTodoList(todoList);
  };

  return (
    <div className="container">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
            type="text"
            placeholder="Text input"
            value="bulma"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <p className="help is-success">This username is available</p>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-danger"
            type="email"
            placeholder="Email input"
            value="hello@"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p className="help is-danger">This email is invalid</p>
      </div>

      <div className="field">
        <label className="label">Subject</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input type="checkbox" />I agree to the{" "}
            <a href="#">terms and conditions</a>
          </label>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="radio">
            <input type="radio" name="question" />
            Yes
          </label>
          <label className="radio">
            <input type="radio" name="question" />
            No
          </label>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
  );
}

const TableContainer = styled.div.attrs({
  className: "control",
})`
  overflow-y: scroll;
  height: 350px;
`;

const TableHeader = styled.th.attrs({
  style: { borderWidth: "0" },
})`
  border: none;
  border-width: none;
  position: sticky;
  z-index: 1;
  top: 0;
  background: white;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-bottom: 2px solid #dbdbdb;
  }
`;

const Panel = styled.div.attrs({
  className: "panel",
})`
  margin: 0.75rem 0 0 0;
`;

const PanelHeader = styled.div.attrs({
  className: "panel-heading is-size-6 p-2",
})`
  display: flex;
  align-items: center;
`;

const PanelHeaderButton = styled.button.attrs({
  className: "button is-small head-button",
})`
  margin-left: auto;
`;

const PanelBlock = styled.div.attrs({
  className: "panel-block",
})``;

const Columns = styled.div.attrs({
  className: "columns is-vcentered",
})``;

const Column = styled.div.attrs({
  className: "column is-2",
})`
  padding: 0.25rem;
`;

const TwoColumn = styled.div.attrs({
  className: "column is-4 flexbox",
})`
  padding: 0.25rem;
  display: flex;
  flex-direction: row;
`;

const Caption = styled.div`
  background-color: hsl(0, 0%, 93%);
  color: black;
  font-size: 0.75rem;
  padding: 0.35rem;
  text-align: center;
  border-radius: 2px;
`;

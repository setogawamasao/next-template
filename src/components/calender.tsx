"use client";
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";

export const Calender = <T extends FieldValues>(
  props: UseControllerProps<T>,
) => {
  registerLocale("ja", ja);
  const { name, control } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <DatePicker
          onChange={onChange}
          selected={value}
          dateFormat="yyyy/MM/dd"
          locale="ja"
          className="input form is-small"
          placeholderText="YYYY/MM/DD"
        />
      )}
    />
  );
};

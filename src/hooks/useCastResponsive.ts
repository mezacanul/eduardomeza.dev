"use client";
import {
  ResponsiveValues,
  useResponsive,
} from "./useResponsive";

export function castResponsiveValues<T>(value: T | T[]) {
  return typeof value === "string"
    ? value
    : useResponsive(value as ResponsiveValues<T>);
}

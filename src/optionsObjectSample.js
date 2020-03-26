import React from "react";
import { CallSplit as CallSplitIcon } from "@material-ui/icons";
import rows from "./rows";

export const title = "Scenario Details";
export const datatable = {
  width: "90vw",
  height: "40vh",
  widthNumber: 921.6
};
export const header = {
  height: "60px",
  heightNumber: 60
};
export const body = {
  heightNumber: 768 * 0.4 - 180
};
export const row = {
  height: "48px",
  heightNumber: 48
};
export const columnSizeMultiplier = 1;
export const isScrolling = false;
export const dimensions = {
  datatable,
  header,
  body,
  row,
  columnSizeMultiplier,
  isScrolling
};
export const keyColumn = "id";
export const font = "Roboto";
export const columnAction = {
  id: "o2xpActions",
  label: "Actions",
  hiddenCreate: true,
  colSize: "150px",
  editable: false
};

export const columns = [
  {
    id: "id",
    label: "id",
    colSize: "200px",
    editable: false,
    required: true,
    dataType: "text",
    valueVerification: val => {
      const error = val === "whatever";
      const messversion = val === "whatever" ? "Value is not valid" : "";
      return {
        error,
        messversion
      };
    }
  },
  {
    id: "name",
    label: "name",
    colSize: "100px",
    editable: true,
    dataType: "text"
  },
  {
    id: "version",
    label: "version",
    colSize: "60px",
    editable: true,
    dataType: "number",
    valueVerification: val => {
      let error;
      let messversion;
      switch (true) {
        case val > 100:
          error = true;
          messversion = "Value is too big";
          break;
        case val < 1:
          error = true;
          messversion = "Value is too low";
          break;
        default:
          error = false;
          messversion = "";
          break;
      }

      return {
        error,
        messversion
      };
    }
  },
  {
    id: "validate",
    label: "validate",
    colSize: "50px",
    editable: true,
    dataType: "boolean"
  },
  {
    id: "modifyDate",
    label: "last modified date",
    colSize: "180px",
    editable: true,
    dataType: "dateTime",
    dateFormat: "YYYY-MM-DDTHH:mm",
    valueVerification: val => {
      if (new Date().getTime() < new Date(val).getTime()) {
        return {
          error: true,
          messversion: "Date can't be in the futur"
        };
      }
      return {
        error: false,
        messversion: ""
      };
    }
  },
  {
    id: "jobs",
    label: "jobs",
    colSize: "120px",
    editable: true,
    inputType: "select",
    values: ["blue", "brown", "green"]
  },
  {
    id: "description",
    label: "description",
    colSize: "250px",
    editable: false,
    dataType: "description"
  }
];
export const rowsEdited = [];
export const rowsGlobalEdited = [];
export const rowsSelected = [];
export const newRows = [];
export const rowsDeleted = [];
export const refreshRows = null;
export const isRefreshing = false;
export const stripped = false;
export const searchTerm = "";
export const orderBy = [];
export const data = {
  columns,
  rows
};
export const pagination = {
  pversionSelected: 1,
  pversionTotal: 1,
  rowsPerPversionSelected: "All",
  rowsCurrentPversion: [],
  rowsToUse: rows
};
export const rowsPerPversion = {
  available: [10, 25, 50, 100, "All"],
  selected: "All"
};
export const userConfiguration = {
  columnsOrder: ["id", "name", "version", "validate", "modifyDate", "jobs", "description"],
  copyToClipboard: false
};
export const selectionIcons = [
  {
    title: "Selected Rows",
    icon: <CallSplitIcon />,
    onClick: res => res
  },
  {
    title: "Selected Rows 2",
    icon: <CallSplitIcon />,
    onClick: res => res
  }
];
export const additionalIcons = [
  {
    title: "Coffee",
    icon: <CallSplitIcon />,
    onClick: () => true
  }
];
export const additionalActions = [
  {
    title: "Coffee",
    icon: <CallSplitIcon />,
    onClick: res => res
  }
];
export const features = {
  canEdit: true,
  canEditRow: null,
  canGlobalEdit: false,
  canAdd: false,
  canPrint: true,
  canDownload: true,
  canDuplicate: false,
  canDelete: true,
  canSearch: false,
  canRefreshRows: false,
  canSelectRow: true,
  canOrderColumns: false,
  canSaveUserConfiguration: false,
  editableIdNewRow: [],
  userConfiguration,
  rowsPerPversion,
  additionalIcons,
  selectionIcons
};
export const options = {
  title,
  dimensions,
  keyColumn,
  font,
  pagination,
  data,
  features
};

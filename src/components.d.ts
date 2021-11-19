/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AccordionButton {
        "color": string;
        "description": string;
        "label": string;
        "width": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface OdsBody {
    }
    interface OdsRow {
    }
    interface OdsTable {
        "class": string;
        "headless": boolean;
    }
    interface OdsTableData {
    }
    interface OdsTableFoot {
    }
    interface OdsTableHeader {
    }
    interface OdsThead {
    }
    interface PlainButton {
    }
}
declare global {
    interface HTMLAccordionButtonElement extends Components.AccordionButton, HTMLStencilElement {
    }
    var HTMLAccordionButtonElement: {
        prototype: HTMLAccordionButtonElement;
        new (): HTMLAccordionButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLOdsBodyElement extends Components.OdsBody, HTMLStencilElement {
    }
    var HTMLOdsBodyElement: {
        prototype: HTMLOdsBodyElement;
        new (): HTMLOdsBodyElement;
    };
    interface HTMLOdsRowElement extends Components.OdsRow, HTMLStencilElement {
    }
    var HTMLOdsRowElement: {
        prototype: HTMLOdsRowElement;
        new (): HTMLOdsRowElement;
    };
    interface HTMLOdsTableElement extends Components.OdsTable, HTMLStencilElement {
    }
    var HTMLOdsTableElement: {
        prototype: HTMLOdsTableElement;
        new (): HTMLOdsTableElement;
    };
    interface HTMLOdsTableDataElement extends Components.OdsTableData, HTMLStencilElement {
    }
    var HTMLOdsTableDataElement: {
        prototype: HTMLOdsTableDataElement;
        new (): HTMLOdsTableDataElement;
    };
    interface HTMLOdsTableFootElement extends Components.OdsTableFoot, HTMLStencilElement {
    }
    var HTMLOdsTableFootElement: {
        prototype: HTMLOdsTableFootElement;
        new (): HTMLOdsTableFootElement;
    };
    interface HTMLOdsTableHeaderElement extends Components.OdsTableHeader, HTMLStencilElement {
    }
    var HTMLOdsTableHeaderElement: {
        prototype: HTMLOdsTableHeaderElement;
        new (): HTMLOdsTableHeaderElement;
    };
    interface HTMLOdsTheadElement extends Components.OdsThead, HTMLStencilElement {
    }
    var HTMLOdsTheadElement: {
        prototype: HTMLOdsTheadElement;
        new (): HTMLOdsTheadElement;
    };
    interface HTMLPlainButtonElement extends Components.PlainButton, HTMLStencilElement {
    }
    var HTMLPlainButtonElement: {
        prototype: HTMLPlainButtonElement;
        new (): HTMLPlainButtonElement;
    };
    interface HTMLElementTagNameMap {
        "accordion-button": HTMLAccordionButtonElement;
        "my-component": HTMLMyComponentElement;
        "ods-body": HTMLOdsBodyElement;
        "ods-row": HTMLOdsRowElement;
        "ods-table": HTMLOdsTableElement;
        "ods-table-data": HTMLOdsTableDataElement;
        "ods-table-foot": HTMLOdsTableFootElement;
        "ods-table-header": HTMLOdsTableHeaderElement;
        "ods-thead": HTMLOdsTheadElement;
        "plain-button": HTMLPlainButtonElement;
    }
}
declare namespace LocalJSX {
    interface AccordionButton {
        "color"?: string;
        "description"?: string;
        "label"?: string;
        "onClicked"?: (event: CustomEvent<any>) => void;
        "width"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface OdsBody {
    }
    interface OdsRow {
    }
    interface OdsTable {
        "class"?: string;
        "headless"?: boolean;
    }
    interface OdsTableData {
    }
    interface OdsTableFoot {
    }
    interface OdsTableHeader {
    }
    interface OdsThead {
    }
    interface PlainButton {
    }
    interface IntrinsicElements {
        "accordion-button": AccordionButton;
        "my-component": MyComponent;
        "ods-body": OdsBody;
        "ods-row": OdsRow;
        "ods-table": OdsTable;
        "ods-table-data": OdsTableData;
        "ods-table-foot": OdsTableFoot;
        "ods-table-header": OdsTableHeader;
        "ods-thead": OdsThead;
        "plain-button": PlainButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "accordion-button": LocalJSX.AccordionButton & JSXBase.HTMLAttributes<HTMLAccordionButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "ods-body": LocalJSX.OdsBody & JSXBase.HTMLAttributes<HTMLOdsBodyElement>;
            "ods-row": LocalJSX.OdsRow & JSXBase.HTMLAttributes<HTMLOdsRowElement>;
            "ods-table": LocalJSX.OdsTable & JSXBase.HTMLAttributes<HTMLOdsTableElement>;
            "ods-table-data": LocalJSX.OdsTableData & JSXBase.HTMLAttributes<HTMLOdsTableDataElement>;
            "ods-table-foot": LocalJSX.OdsTableFoot & JSXBase.HTMLAttributes<HTMLOdsTableFootElement>;
            "ods-table-header": LocalJSX.OdsTableHeader & JSXBase.HTMLAttributes<HTMLOdsTableHeaderElement>;
            "ods-thead": LocalJSX.OdsThead & JSXBase.HTMLAttributes<HTMLOdsTheadElement>;
            "plain-button": LocalJSX.PlainButton & JSXBase.HTMLAttributes<HTMLPlainButtonElement>;
        }
    }
}

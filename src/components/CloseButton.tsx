import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton(){
  return (
    <Popover.Button className="top-3 right-4 absolute text-zinc-400 hover:text-zinc-100" title="Fechar formulario de feedback">
      <X weight="bold" className="m-4 h-4" />
    </Popover.Button>
  );
}
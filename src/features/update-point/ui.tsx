import * as Dialog from "@radix-ui/react-dialog";
import { toast } from "react-toastify";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Form, Formik } from "formik";

import { IUpdatePoint, UpdatePointProps, useModifyPoint } from "./model.ts";
import { Button, Input, Switch } from "../../shared/ui";

export const UpdatePoint = ({ point, onClose, onUpdatedPoint }: UpdatePointProps) => {
  const { updatePoint, mapValueToForm } = useModifyPoint();

  const handleUpdatePoint = (form: IUpdatePoint) => {
    if (point) {
      updatePoint(form, point)
        .then(() => {
          onClose();
          onUpdatedPoint();
        })
        .catch(() => {
          toast.error("Could not update point!");
        });
    }
  };

  return (
    !!point && (
      <>
        <Dialog.Root open={!!point} onOpenChange={open => !open && onClose()}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-20" />
            <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-96 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6">
              <Dialog.Title className="mb-2 text-3xl">Update point</Dialog.Title>

              <Dialog.Description className="mb-4 text-xl">
                Make changes to the point here. Click save when you're done.
              </Dialog.Description>

              <Formik<IUpdatePoint> initialValues={mapValueToForm(point)} onSubmit={handleUpdatePoint}>
                <Form>
                  <Input name="details" label="Details" placeholder="input details" wrapperClassNames="mb-4" />
                  <Switch name="status" wrapperClassNames="mb-6">
                    Status
                  </Switch>
                  <Button type="submit" className="ml-auto mr-0 block">
                    Save changes
                  </Button>
                </Form>
              </Formik>

              <Dialog.Close asChild>
                <Button
                  type="button"
                  className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full"
                >
                  <Cross2Icon />
                </Button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </>
    )
  );
};

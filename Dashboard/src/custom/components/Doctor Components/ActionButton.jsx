import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import useDoctorContext from "@/custom/pages/Hooks/useDoctorsContext";
import { Edit, MoreHorizontalIcon, Trash2 } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

function ActionButton({DID}) {
      const {deleteDoctor} = useDoctorContext()
  function handleDelete(){
      deleteDoctor(DID)
  }
  return (
    <>
      <div>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger>
            <MoreHorizontalIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <NavLink to="updateDoctor" state={{DID : DID}} >
              <DropdownMenuItem className=" flex items-center  justify-center ">
                <div className="w-full flex flex-row  gap-3  ">
                  <div>
                    <Edit className="text-mdDarkGreen" />
                  </div>
                  <div>Edit</div>
                </div>
              </DropdownMenuItem>
            </NavLink>
            <DropdownMenuItem
            asChild
            className="flex items-center content-center justify-center"
          >
            <AlertDialog className="w-full flex flex-row  gap-3">
              <AlertDialogTrigger
                modal="false"
                className=" p-2 text-sm w-full items-center  flex flex-row gap-3"
              >
                <Trash2 className="text-red-800" />
                <div>Delete</div>
              </AlertDialogTrigger>
              <AlertDialogContent className="b">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-darkGreen ">
                    Are you absolutely sure?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    Doctor.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-700 hover:bg-red-900"
                    onClick={handleDelete}
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

export default ActionButton;

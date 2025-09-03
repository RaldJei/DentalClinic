import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  IconPlus
} from "@tabler/icons-react"

import { DateBirth } from "./datebirth"


export function RegisterPatient() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <IconPlus />
                      <span className="hidden lg:inline">Register Patient</span>
                    </Button>
                  </DialogTrigger>
        
        <DialogContent className="sm:max-w-[1000px] max-h-[80vh] overflow-y-auto" onInteractOutside={(e) => e.preventDefault()}>
        
          <DialogHeader>
            <DialogTitle>Patient Registration</DialogTitle>
           
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4 text-gray-500">
            <div className="grid gap-3">
              <Label htmlFor="fname">Firstname</Label>
              <Input id="fname" name="fname" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="mname">Middle Name</Label>
              <Input id="mname" name="mname"  />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="lname">Lastname</Label>
              <Input id="lname" name="lname" />
            </div>
            
            <div className="grid gap-3">
              <DateBirth />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="sex">Sex</Label>
               <select
                  name="sex"
                  className="w-full border rounded-md px-2 py-1"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
            </div>
            

             <div className="grid gap-3">
              <DateBirth />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="sex">Sex</Label>
               <select
                  name="sex"
                  className="w-full border rounded-md px-2 py-1"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
            </div>


             <div className="grid gap-3">
              <DateBirth />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="sex">Sex</Label>
               <select
                  name="sex"
                  className="w-full border rounded-md px-2 py-1"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
            </div>

             <div className="grid gap-3">
              <DateBirth />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="sex">Sex</Label>
               <select
                  name="sex"
                  className="w-full border rounded-md px-2 py-1"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
            </div>

             <div className="grid gap-3">
              <DateBirth />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="sex">Sex</Label>
               <select
                  name="sex"
                  className="w-full border rounded-md px-2 py-1"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
            </div>

             <div className="grid gap-3">
              <DateBirth />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="sex">Sex</Label>
               <select
                  name="sex"
                  className="w-full border rounded-md px-2 py-1"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
            </div>

             <div className="grid gap-3">
              <DateBirth />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="sex">Sex</Label>
               <select
                  name="sex"
                  className="w-full border rounded-md px-2 py-1"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
            </div>
             <div className="grid gap-3">
              <DateBirth />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="sex">Sex</Label>
               <select
                  name="sex"
                  className="w-full border rounded-md px-2 py-1"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
            </div>
             <div className="grid gap-3">
              <DateBirth />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="age">Age</Label>
              <Input id="age" name="age" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="sex">Sex</Label>
               <select
                  name="sex"
                  className="w-full border rounded-md px-2 py-1"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
            </div>

          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

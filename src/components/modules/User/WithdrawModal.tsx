import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } 
from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useWithdrawMutation } from "@/redux/features/user/user.api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function WithdrawModal() {
    const form = useForm();
    const [withdraw] = useWithdrawMutation();
    const [open, setOpen] = useState(false);

    const onSubmit = async (data) => {
      console.log(data);
    //   const res = await withdraw({amount: data.amount}).unwrap();
    //   if (res.success) {
    //     toast.success("Add-Money Successfully");
    //     setOpen(false);
    //   }
    }

  return (
     <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button>Withdraw Money</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Withdraw Money</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form id="withdraw" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Number"
                        type="number"
                        {...field}
                         onChange={(e) => field.onChange(Number(e.target.value))} // convert to number
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" form="withdraw">
              Withdraw
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
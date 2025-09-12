import AddMoneyModal from "@/components/modules/User/AddMoneyModal";

export default function AddMoney() {
  return (
     <div className="justify-center mx-auto">
      <div className="justify-center border p-10 border-muted rounded-md">
        <h1 className="text-xl my-5 font-semibold">Add Money</h1>
        <AddMoneyModal />
      </div>
    </div>
  );
}
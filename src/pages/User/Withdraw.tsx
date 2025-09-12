import WithdrawModal from "@/components/modules/User/WithdrawModal";

export default function Withdraw() {
  return (
    <div className="justify-center mx-auto">
          <div className="justify-center border p-10 border-muted rounded-md">
            <h1 className="text-xl my-5 font-semibold">Withdraw Money</h1>
            <WithdrawModal />
          </div>
        </div>
  );
}
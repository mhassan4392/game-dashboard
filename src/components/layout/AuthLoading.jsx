import AuthSpinner from "@/components/Spinner/AuthSpinner";
const AuthLoading = () => {
  return (
    <div className="fixed z-10 inset-0 bg-dark-light flex items-center justify-center">
      <div className="space-y-3 text-center">
        <div className="">
          <AuthSpinner />
        </div>
        <p className="text-white">
          If you are using safari please turn on cookie
        </p>
        <h3 className="text-lg">Waiting Authentication...</h3>
      </div>
    </div>
  );
};

export default AuthLoading;

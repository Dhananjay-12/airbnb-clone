function ErrorMessage({ message }) {
  return (
    <span className="text-red-500 font-semibold text-sm  inline-block w-full rounded-lg text-center">
      {message}
    </span>
  );
}

export default ErrorMessage;

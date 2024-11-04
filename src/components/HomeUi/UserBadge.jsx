const UserBadge = ({ name }) => {
  const handleLogout = () => {
    localStorage.removeItem("firstName");
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-2 px-2">
      <button onClick={handleLogout}>
        <i className="fa-solid fa-right-from-bracket"></i>
      </button>
      <div className="username">{name}</div>
      <i className="fa-solid fa-user py-2 px-2 bg-my_gray_Text text-my_white text-[13px] rounded-full"></i>
    </div>
  );
};

export default UserBadge;

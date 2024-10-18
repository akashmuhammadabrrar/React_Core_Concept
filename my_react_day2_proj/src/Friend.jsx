export default function Friend({ friend }) {
  const { name, email } = friend;
  return (
    <div className="box_friend">
      <h4>Name: {name}</h4>
      <h4>E-Mail: {email}</h4>
    </div>
  );
}

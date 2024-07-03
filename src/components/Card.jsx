export default function Card(props) {
  return (
    <div
      classList={{ " rounded-md": props.rounded, "shadow-md": !props.flat }}
      class="bg-white p-4 text-center"
    >
      {props.children}
    </div>
  );
}

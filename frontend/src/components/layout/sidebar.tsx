function Sidebar() {
  return (
    <aside className="flex flex-col gap-4 px-4 py-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Tasks</h2>
        <button className="btn btn-primary">New Task</button>
      </div>
      <ul className="flex flex-col gap-2">
        <li className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            id="checkbox-1"
          />
          <label htmlFor="checkbox-1" className="text-sm">
            <span className="text-gray-900">Task 1</span>
          </label>
        </li>
        <li className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            id="checkbox-2"
          />
          <label htmlFor="checkbox-2" className="text-sm">
            <span className="text-gray-900">Task 2</span>
          </label>
        </li>
        <li className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            id="checkbox-3"
          />
          <label htmlFor="checkbox-3" className="text-sm">
            <span className="text-gray-900">Task 3</span>
          </label>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

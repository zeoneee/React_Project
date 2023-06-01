import React from "react";
import "../css/task.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

class Task extends React.Component {
  clickHandle = (id) => {
    this.props.taskOnClick(id);
  };

  render() {
    let userIcon = this.props.assignUser.map((user, idx) => {
      return (
        <div
          className="header"
          style={{
            backgroundImage: "url(" + this.props.user[user].userHeader + ")",
          }}
        />
      );
    });
    return (
      <Draggable draggableId={this.props.draggableId} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            className="task"
            {...provided.draggableProps}
            ref={provided.innerRef}
            draggable
            {...provided.dragHandleProps}
            onClick={this.clickHandle.bind(this, this.props.taskId)}
          >
            <div className="t_head">
              <div className={"t_priority " + this.props.priority}>
                {this.props.priority}
              </div>
              <div className="t_done">
                <div className="bar">done</div>
              </div>
            </div>
            <div className="t_content">
              <span>{this.props.content}</span>
            </div>
            <div className="t_botton">
              <div className="progressing" />
              <div className="userIconWraper">{userIcon}</div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Task;

import classes from "./AddButton.module.css";

const AddButton = () => {
    return (
        <button className={classes.addBtn}>
            <div>+ Add</div>
        </button>
    );
};

export default AddButton;
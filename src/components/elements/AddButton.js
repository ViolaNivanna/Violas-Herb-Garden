import classes from "./AddButton.module.css";

const AddButton = () => {
    return (
        <button className={classes.addBtn}>
            <a>+ Add</a>
        </button>
    );
};

export default AddButton;
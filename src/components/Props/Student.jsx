const Student = ({id,name,age,email,major}) => {
    return(
        <>
            <h3>Student ID : {id}</h3>
            <h3>Student Name : {name}</h3>
            <h3>Student Age : {age}</h3>
            <h3>Student Email : {email}</h3>
            <h3>Student Major : {major}</h3>
        </>
    );
};

export default Student;

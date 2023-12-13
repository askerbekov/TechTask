import React, {useState} from 'react';
import Radio from '@mui/material/Radio';
import {Button} from "@mui/material";
const StartSession = () => {
        const [selectedValue, setSelectedValue] = useState('a');

        const handleChange = (event) => {
            setSelectedValue(event.target.value);
        };
    return (
        <div>
             <h3>Сеанс гемодиализа</h3>
             <h4>№ месяце: 4</h4>
            <div>
                <h2>Назначения сеанса гемодиализа</h2>
                <div>
                    <p>Программа аппарата</p>
                    <Button variant="outlined"
                            color="success"
                            checked={selectedValue === 'a'}
                            onClick={handleChange}
                            value="a"
                    >HD</Button>


                    <Button variant="outlined"
                            color="error"
                            checked={selectedValue === 'b'}
                            onClick={handleChange}
                            value="b"
                            >HDF
                    </Button>


                    <Button variant="outlined"
                            color="error"
                            checked={selectedValue === 'b'}
                            onClick={handleChange}
                            value="c"
                            >
                        UF
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default StartSession;
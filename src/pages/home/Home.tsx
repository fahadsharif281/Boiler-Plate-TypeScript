import { useSelector } from 'react-redux';
import classes from './Home.module.scss';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';
import { Service } from '../../services/general.services';
import { IBooks } from '../../models/IBooks';

const Home = (): JSX.Element => {
    const { user } = useSelector((state: RootState) => state.root.user);
    const { email } = user;
    useEffect(() => {
        Service().then((response: IBooks) => {
            console.log(response)
        }).catch((error) => console.log(error));
    })

    return (
        <>
            <div className={classes.main}>
                Welcome {email}
            </div>
        </>
    )
}
export default Home;
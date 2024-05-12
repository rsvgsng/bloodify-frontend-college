import React from 'react'
import { districtsOfNepal } from '../SearchBloodComponents/SearchBloodBox'
import { FaSearch } from 'react-icons/fa'
import style from './SearchAmbulance.module.css'
import { useDispatch } from 'react-redux'
import { searchAmbulance } from '../../../features/mainSlice'
function SearchAmbulance() {

    let dispatch = useDispatch<any>()
    async function handleSearch(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault()
        let formData = new FormData(e.currentTarget.form)
        let data = {
            district: formData.get('district')
        }
        dispatch(searchAmbulance(data))
    }

    return (
        <React.Fragment>
            <div className={style.search__box}>
                <div className={style.header__ttl}>
                    <h2>Search Ambulances</h2>
                </div>
                <div className={style.search__body}>
                    <form >

                        <label htmlFor="district">Select district</label>
                        <select name="district" id="district">
                            {
                                districtsOfNepal.map((_, i) => {
                                    return (
                                        <option key={i} value={_.name}>{_.name}</option>
                                    )
                                })
                            }
                        </select>

                        <button
                            onClick={(e: any) => handleSearch(e)}
                            type="submit">Search <FaSearch /></button>

                    </form>

                </div>
            </div>
        </React.Fragment >
    )
}

export default SearchAmbulance
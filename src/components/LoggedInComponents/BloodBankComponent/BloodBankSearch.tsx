import React from 'react'
import style from '../SearchBloodComponents/SearchBloodBox.module.css'
import { districtsOfNepal } from '../SearchBloodComponents/SearchBloodBox'
import { FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { searchBloodBanks } from '../../../features/mainSlice'
function BloodBankSearch() {
    let dispatch = useDispatch<any>()
    async function handleSearch(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault()
        let formData = new FormData(e.currentTarget.form)
        let data = {
            district: formData.get('district')
        }
        dispatch(searchBloodBanks(data))
    }

    return (
        <React.Fragment>
            <div className={style.search__box}>
                <div className={style.header__ttl}>
                    <h2>Search Blood Bank</h2>
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

export default BloodBankSearch
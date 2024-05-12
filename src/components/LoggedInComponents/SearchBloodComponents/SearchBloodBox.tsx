
import React from 'react'
import style from './SearchBloodBox.module.css'
import { FaSearch } from "react-icons/fa";

export const districtsOfNepal = [
    { name: "Jhapa" },

    { name: "Achham" },
    { name: "Arghakhanchi" },
    { name: "Baglung" },
    { name: "Baitadi" },
    { name: "Bajhang" },
    { name: "Bajura" },
    { name: "Banke" },
    { name: "Bara" },
    { name: "Bardiya" },
    { name: "Bhaktapur" },
    { name: "Bhojpur" },
    { name: "Chitwan" },
    { name: "Dadeldhura" },
    { name: "Dailekh" },
    { name: "Dang" },
    { name: "Darchula" },
    { name: "Dhading" },
    { name: "Dhankuta" },
    { name: "Dhanusa" },
    { name: "Dholkha" },
    { name: "Dolpa" },
    { name: "Doti" },
    { name: "Gorkha" },
    { name: "Gulmi" },
    { name: "Humla" },
    { name: "Ilam" },
    { name: "Jajarkot" },
    { name: "Jumla" },
    { name: "Kailali" },
    { name: "Kalikot" },
    { name: "Kanchanpur" },
    { name: "Kapilvastu" },
    { name: "Kaski" },
    { name: "Kathmandu" },
    { name: "Kavrepalanchok" },
    { name: "Khotang" },
    { name: "Lalitpur" },
    { name: "Lamjung" },
    { name: "Mahottari" },
    { name: "Makwanpur" },
    { name: "Manang" },
    { name: "Morang" },
    { name: "Mugu" },
    { name: "Mustang" },
    { name: "Myagdi" },
    { name: "Nawalparasi" },
    { name: "Nuwakot" },
    { name: "Okhaldhunga" },
    { name: "Palpa" },
    { name: "Panchthar" },
    { name: "Parbat" },
    { name: "Parsa" },
    { name: "Pyuthan" },
    { name: "Ramechhap" },
    { name: "Rasuwa" },
    { name: "Rautahat" },
    { name: "Rolpa" },
    { name: "Rukum" },
    { name: "Rupandehi" },
    { name: "Salyan" },
    { name: "Sankhuwasabha" },
    { name: "Saptari" },
    { name: "Sarlahi" },
    { name: "Sindhuli" },
    { name: "Sindhupalchok" },
    { name: "Siraha" },
    { name: "Solukhumbu" },
    { name: "Sunsari" },
    { name: "Surkhet" },
    { name: "Syangja" },
    { name: "Tanahun" },
    { name: "Taplejung" },
    { name: "Terhathum" },
    { name: "Udayapur" }
];

function SearchBloodBox() {

    async function handleSearch(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault()
        let formData = new FormData(e.currentTarget.form)
        let data = {
            bloodType: formData.get('bloodType'),
            district: formData.get('district')
        }
        console.log(data)
    }

    return (
        <React.Fragment>
            <div className={style.search__box}>
                <div className={style.header__ttl}>
                    <h2>Search Blood</h2>
                </div>
                <div className={style.search__body}>
                    <form >
                        <label htmlFor="bloodType">Select blood type</label>
                        <select name="bloodType" id="bloodType">
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
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

export default SearchBloodBox
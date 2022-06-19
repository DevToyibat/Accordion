import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const Loading = ({text, speed}) =>{
const [content,setContent] = useState(text)
const [language, setLanguage] = useState(['All', 'Javascript', 'Python', 'Ruby'])
const [selected, setSelected] = useState('All')

const updatedLanguage = (selected) =>{
console.log(selected)
setSelected(selected)
}

useEffect(()=>{
   const update = window.setInterval(()=>{
setContent((content)=>{
    return content === `${text}...` ? text : `${content}.`
})
    },speed)

    return () => window.clearInterval(update)
},[])
           
    return <React.Fragment>
        <div>
            {language.map((lang)=>{
                return(
                    <div key={lang} >
                        <div style={flexCenter}>
                        <button onClick={updatedLanguage(lang)} style = {language === selected ?{color:'red'}: {color:'blue'}}>{lang}</button>
                        </div>
                        
                    </div>
                )
            })}
        </div>
        <h1>{content}</h1>
    </React.Fragment>
}
const flexCenter = {
    display:'flex',
    justifyContnet:'center'

}
Loading.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number
}
Loading.defaultProps = {
    text: 'Loading',
    speed:300
}
export default Loading
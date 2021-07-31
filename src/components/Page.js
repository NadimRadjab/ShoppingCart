import React from 'react-dom'
import '../styles/Page.css'
function Page({ children }) {
    return (
        <section className='page'>{children}</section>
    )
}
export default Page;
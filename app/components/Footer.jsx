export default function Footer() {
    return (
        <footer>
            <ul id='social-links'>
                <li><a className='text-[#0077B5] hover-fade' href="#">LinkedIn</a></li>
                <li><a className="text-black hover-fade" href="#">X</a></li>
                <li><a className="text-[#E1306C] hover-fade" href="#">Instagram</a></li>
            </ul>

            <ul className='text-right'>
                <li>© GeneriCorp 2025</li>
                <li>TfL data provided by <a className='text-[#0019a8] hover-fade' href="https://tfl.gov.uk/info-for/open-data-users/">TfL</a></li>
            </ul>
        </footer>
    )
}
export default function Footer() {
    return (
        <footer>
            <ul className='flex flex-col md:flex-row gap-2 md:gap-4 text-left'>
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
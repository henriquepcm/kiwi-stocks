export default function Footer() {
     return (
          <div className="flex flex-col gap-4 text-sm mt-auto pt-10 tracking-wider">
               <p>
                    The data provided by this app may contain errors. Please do
                    not base any important decisions solely on this information.
                    Always verify details and seek professional advice.
               </p>
               <p>
                    Kiwi Compare Stocks by&nbsp;
                    <a
                         className="henry-footer-link"
                         data-replace="Henrique Pochmann"
                         href="https://henriquepcm.com/"
                         target="blank"
                    >
                         <span>Henrique Pochmann</span>
                    </a>
               </p>
          </div>
     );
}

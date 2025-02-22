export function DocsSpecs() {
  return (
    <div className="flex flex-col gap-12 col-span-3">
      <h2 className="text-3xl font-bold uppercase">docs</h2>

      <ul className="flex flex-col">
        <h2 className="font-bold mb-2 tracking-widest">Primary</h2>
        <div className="flex justify-between">
          <div className="flex items-center gap-4 w-full">
            <li className="w-full">
              <ul className="flex flex-col gap-2 w-full">
                <li className=" h-10 rounded-md bg-primary" />
                <li className="flex items-center justify-between  text-sm text-neutral-400">
                  <span>500</span>
                  <span className="font-bold">#99D9F2</span>
                </li>
              </ul>
            </li>

            <li className="w-full">
              <ul className="flex flex-col gap-2 w-full justify-between">
                <li className=" h-10 rounded-md bg-primary-900" />
                <li className="flex items-center justify-between text-sm text-neutral-400">
                  <span>900</span>
                  <span className="font-bold">#597E8C</span>
                </li>
              </ul>
            </li>
          </div>

          <li className="w-full pl-4">
            <ul className="flex flex-col gap-2">
              <li className=" h-10 rounded-md bg-gradient-to-r to-primary from-primary-900" />
              <li className="flex items-center justify-between text-sm text-neutral-400">
                <span>Gradient</span>
                <span className="font-bold">#99D9F2</span>
              </li>
            </ul>
          </li>
        </div>
      </ul>

      <ul className="flex flex-col">
        <h2 className="font-bold mb-2 tracking-widest">
          Oxanium - <span className="text-[#D3FF00]">Font Sans</span>
        </h2>
        <div className="flex justify-between">
          <div className="flex flex-col items-start gap-4 w-full">
            <li className="w-full">
              <ul className="flex flex-col gap-2 w-full">
                <li className="flex items-center justify-between  text-sm text-neutral-400">
                  <span>16 px</span>
                  <span className="font-bold">Semibold</span>
                </li>
              </ul>
            </li>

            <li className="w-full">
              <ul className="flex flex-col gap-2 w-full justify-between">
                <li className="flex items-center justify-between text-sm text-neutral-400">
                  <span>20 px</span>
                  <span className="font-bold">Bold</span>
                </li>
              </ul>
            </li>

            <li className="w-full">
              <ul className="flex flex-col gap-2 w-full justify-between">
                <li className="flex items-center justify-between text-sm text-neutral-400">
                  <span>24 px</span>
                  <span className="font-bold">Bold</span>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </ul>

      <ul className="flex flex-col">
        <h2 className="font-bold mb-2 tracking-widest">
          Montserrat - <span className="text-[#D3FF00]">Font Destaque</span>
        </h2>
        <div className="flex justify-between">
          <div className="flex flex-col items-start gap-4 w-full">
            <li className="w-full">
              <ul className="flex flex-col gap-2 w-full">
                <li className="flex items-center justify-between  text-sm text-neutral-400">
                  <span>16 px</span>
                  <span className="font-bold">Semibold</span>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </ul>
    </div>
  )
}

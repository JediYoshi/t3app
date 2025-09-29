import Link from "next/link";

export default function Layer2Page() {
  return (
    <main className="">
        <div className="flex flex-wrap justify-center text-[100px] font-bold">Shop</div>
        
        <div className="flex flex-wrap justify-center gap-[8px]">

        <div>
          <div className="card w-96 bg-[#004f80] shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-info">Current</span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Free</h2>
                <span className="text-xl">$0/mo</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <a className="text-[#f70f0f]">☓</a> <span className="line-through opacity-50">Access to Premium Images</span>
                </li>
                <li>
                  <a className="text-[#f70f0f]">☓</a> <span className="line-through opacity-50">20% off Shop Products</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block btn-disabled rounded-[6px]">Current</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card skeleton w-96 bg-[#8c6700] shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">Most Popular</span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Premium</h2>
                <span className="text-xl">$99/mo</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <a className="text-[#00cc00]">✓</a> <span>Access to Premium Images</span>
                </li>
                <li>
                  <a className="text-[#00cc00]">✓</a> <span>20% off Shop Products</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block btn-disabled rounded-[6px]">Unavaiable</button>
              </div>
            </div>
          </div>
        </div>

        </div>

    </main>
  );
}

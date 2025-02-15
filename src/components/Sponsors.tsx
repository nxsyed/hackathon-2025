/* eslint-disable react-dom/no-unsafe-target-blank */
import Image from 'next/image';

export const Sponsors = () => (
  <table className="border-collapse">
    <tbody>
      <tr className="h-56">
        <td className="p-3">
          <a href="https://youthfulvengeance.com/" target="_blank" rel="noopener">
            <Image
              src="/assets/images/youthful.jpg"
              alt="Youhthful Vengence"
              width={260}
              height={224}
            />
          </a>
          <a href="lptbia.com" target="_blank" rel="noopener">
            <Image
              src="/assets/images/bia.png"
              alt="Little Portugal Toronto BIA"
              width={260}
              height={224}
            />
          </a>
        </td>
      </tr>
    </tbody>
  </table>
);

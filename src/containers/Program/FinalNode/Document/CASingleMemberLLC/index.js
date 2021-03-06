import React from 'react'
import './styles.css'

export default function Form ({ data }) {
  const html = `<div class='preview lg-ca-single-member-llc'>
  <div class=WordSection1>

<h1><span style='font-size:12.0pt;font-family:"Times New Roman",serif'>OPERATING
AGREEMENT</span></h1>

<p class=MsoNormal style='text-align:justify'>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>This Operating
Agreement (this “<u>Agreement</u>”) of the Company identified in Section 1 (the
“<u>Company</u>”), is entered into as of the date last set forth in this
Agreement, by the undersigned (“<u>Member</u>”), as the sole member.  </p>

<p class=MsoNormal style='text-align:justify'>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>The Member, by
execution of this Agreement, hereby forms the Company as a limited liability
company pursuant to the California Revised Uniform Limited Liability Company
Act, as amended from time to time (the “<u>Act</u>”), and this Agreement. The
Member agrees as follows:</p>

<p class=MsoNormal style='text-align:justify'>&nbsp;</p>

<p class=MsoNormal style='text-align:justify'>Section 1.        <u>Name</u>.</p>

<p class=MsoNormal style='text-align:justify'>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>The name of
the limited liability company formed by this Agreement is ${data.company_name}.</p>

<p class=MsoNormal style='text-align:justify'>&nbsp;</p>

<p class=MsoNormal style='text-align:justify'>Section 2.        <u>Principal
Business Office</u>.</p>

<p class=MsoNormal style='text-align:justify'>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(a)<span style='margin-right:20.0pt'> </span>The
principal business office of the Company shall initially be located at the
following address:</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>&nbsp;</p>

<p class=MsoNormal>${data.principal_office_address_street}</p>

<p class=MsoNormal style='text-align:justify'>${data.principal_office_address_city}, California
${data.principal_office_address_zipcode}</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(b)<span style='margin-right:20.0pt'> </span>The Member may change the location of
the Company’s principal business office in the Member’s sole discretion.</p>

<p class=MsoNormal style='text-align:justify'>&nbsp;</p>

<p class=MsoNormal style='text-align:justify'>Section 3.        <u>Registered Agent
and Designated California Office</u>.</p>

<p class=MsoNormal style='text-align:justify'>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(a)<span style='margin-right:20.0pt'> </span>The
name and address of the initial agent of the Company for service of process on
the Company in the State of California is set forth in the Company’s Articles
of Organization (the “<u>Articles of Organization</u>”) filed with the California
Secretary of State. </p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(b)<span style='margin-right:20.0pt'> </span>The
address of the designated office of the Company in the State of California is set
forth in the Articles of Organization.</p>

<p class=MsoNormal style='text-align:justify'>&nbsp;</p>

<p class=MsoNormal style='text-align:justify'>Section 4.        <u>Term of the
Company</u>.</p>

<p class=MsoNormal style='margin-top:12.0pt;text-align:justify;text-indent:
36.0pt'>The existence of the Company as a separate legal entity shall continue
until cancellation of the Articles of Organization as provided in the Act.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>Section 5.        <u>Purpose and Powers</u>.  </p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(a)<span style='margin-right:20.0pt'> </span>The
purpose of the Company is to engage in any lawful act or activity for which a limited
liability company may be organized under the Act.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(b)<span style='margin-right:20.0pt'> </span>The Company
or the Member on behalf of the Company shall have and exercise all of the
powers and rights conferred upon limited liability companies formed pursuant to
the Act.</p>

<p class=MsoNormal style='margin-top:12.0pt;page-break-after:avoid'>Section 6.        <u>Management</u>.</p>

<p class=MsoNormal style='margin-top:12.0pt;text-align:justify;text-indent:
36.0pt'>(a)<span style='margin-right:20.0pt'> </span>The business and affairs of the Company shall be managed by the
Member. The Member may appoint one or more nonmembers as co-managers or may
resign as manager at any time and appoint a nonmember as the manager of the
Company on such terms and conditions as the Member and the manager may agree. 
Each Manager appointed by the Member shall hold office until a successor is
elected and qualified or until such Manager’s earlier death, resignation,
expulsion or removal.    </p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(b)<span style='margin-right:20.0pt'> </span>The
Managers shall have the power to do any and all acts necessary, convenient or
incidental to or for the furtherance of the purposes described herein,
including all powers, statutory or otherwise.  The Managers have the authority
to bind the Company. Any act of decision of the Managers shall require the
unanimous consent of the Managers. The Managers are not required to hold
meetings, and if there is more than one Manager, decisions may be reached
through one or more informal consultations followed by agreement between the
Managers.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='page-break-after:avoid'>Section 7.        <u>Limited
Liability</u>.</p>

<p class=MsoNormal style='margin-top:12.0pt;text-align:justify;text-indent:
36.0pt'>Except as otherwise expressly provided by the Act, the debts,
obligations and liabilities of the Company, whether arising in contract, tort
or otherwise, shall be the debts, obligations and liabilities solely of the
Company, and neither the Member nor any Manager shall be obligated personally
for any such debt, obligation or liability of the Company solely by reason of
being a Member or Manager of the Company.</p>

<p class=MsoNormal style='margin-top:12.0pt;page-break-after:avoid'>Section 8.        <u>Capital
Contributions</u>.</p>

<p class=MsoNormal style='margin-top:12.0pt;text-align:justify;text-indent:
36.0pt'>The Member has contributed to the Company property of an agreed value
as listed on the company books. The Member is not required to make any
additional capital contribution to the Company. However, the Member may make
additional capital contributions to the Company at any time.  The provisions of
this Agreement are intended to benefit the Member and, to the fullest extent
permitted by law, shall not be construed as conferring any benefit upon any
creditor of the Company (and no such creditor of the Company shall be a
third-party beneficiary of this Agreement) and the Member shall not have any
duty or obligation to any creditor of the Company to make any contribution to
the Company.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>Section 9.        <u>Allocation of Profits and Losses;
Distributions.</u></p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-indent:36.0pt'>(a)<span style='margin-right:20.0pt'> </span>The Company’s profits
and losses shall be allocated to the Member.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(b)<span style='margin-right:20.0pt'> </span>Distributions
shall be made to the Member at the times and in the aggregate amounts
determined by the Member. </p>

<p class=MsoNormal style='text-align:justify'>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(c)<span style='margin-right:20.0pt'> </span>If the
Member transfers any of the Member’s interest in the Company, then profits,
losses, and all other items attributable to such interest for the fiscal year in
which the transfer occurred shall be divided and allocated between the
transferor and the transferee by taking into account their varying limited
liability company interests during the period in accordance with Internal
Revenue Code §706(d), using any convention permitted by law selected by the
Member. All distributions on or before the date of the transfer shall be made
to the transferor, and all distributions thereafter shall be made to the
transferee.  </p>

<p class=MsoNormal style='margin-top:12.0pt'>Section 10.      <u>Books and Records</u>.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>The Manager
shall keep or cause to be kept complete and accurate books of account and
records with respect to the Company’s business.  The Company’s books of account
shall be kept using the method of accounting determined by the Manager.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>Section 11.      <u>Exculpation and Indemnification</u>.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(a)<span style='margin-right:20.0pt'> </span>Neither
the Member nor any Manager, employee or agent of the Company nor any employee,
representative, agent or affiliate of the Member (collectively, the “<u>Covered</u>
<u>Persons</u>”) shall be liable to the Company or any other person who has an
interest in or claim against the Company for any loss, damage or claim incurred
by reason of any act or omission performed or omitted by such Covered Person in
good faith on behalf of the Company and in a manner reasonably believed to be
within the scope of the authority conferred on such Covered Person by this
Agreement, except that a Covered Person shall be liable for any such loss,
damage or claim incurred by reason of such Covered Person’s gross negligence or
willful misconduct.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(b)<span style='margin-right:20.0pt'> </span>To
the fullest extent permitted by applicable law, a Covered Person shall be
entitled to indemnification from the Company for any payments made and personal
liabilities reasonably incurred by that Covered Person in the ordinary and
proper conduct of the Company's business or the preservation of the Company's
business or property. </p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(c)<span style='margin-right:20.0pt'> </span>To
the extent that, at law or in equity, a Covered Person has duties (including
fiduciary duties) and liabilities relating thereto to the Company or to any other
Covered Person, a Covered Person acting under this Agreement shall not be
liable to the Company or to any other Covered Person for its good faith
reliance on the provisions of this Agreement or any approval or authorization
granted by the Company or any other Covered Person. The provisions of this
Agreement, to the extent that they restrict the duties and liabilities of a
Covered Person otherwise existing at law or in equity, are agreed by the Member
to replace such other duties and liabilities of such Covered Person.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(d)<span style='margin-right:20.0pt'> </span>The
foregoing provisions of this <u>Section 11</u> shall survive any termination of
this Agreement.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>Section 12.      <u>Transfers</u>.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>The Member may
transfer in whole or in part its limited liability company interest in the
Company.  If the Member transfers all of its limited liability company interest
in the Company, the transferee shall be admitted to the Company as a member of
the Company upon its execution of an instrument signifying its agreement to be
bound by the provisions of this Agreement, which instrument may be a
counterpart signature page to this Agreement.  Such admission shall be deemed
effective immediately prior to the transfer and, immediately following such
admission, the transferor shall cease to be a member of the Company.  </p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>Section 13.      <u>Disregarded Entity</u>.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>The Company
has only one member and hereby elects to be treated as a disregarded entity for
Federal and state income tax purposes.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>Section 14.      <u>Dissolution</u>.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='margin-bottom:12.0pt;text-align:justify;text-indent:
36.0pt'>(a)<span style='margin-right:20.0pt'> </span>The Company shall be dissolved on the first to occur
of the following events:</p>

<p class=MsoNormal style='margin-bottom:12.0pt;text-align:justify;text-indent:
52.0pt'>(i) The decision of the Member to dissolve the
Company.</p>

<p class=MsoNormal style='margin-bottom:12.0pt;text-align:justify;text-indent:
52.0pt'>(ii) The sale or other disposition of substantially
all of the Company’s assets.</p>

<p class=MsoNormal style='margin-bottom:12.0pt;text-align:justify;text-indent:
52.0pt'>(iii) The passage of 90 consecutive days during
which the Company has no Members, except on the death of a natural person who
is the Sole Member of the Company, the status of the Member, including a membership
interest, may pass to the heirs, successors, and assigns of the Member by will
or applicable law. The heir, successor, or assign of the Member’s interest
becomes a substituted Member pursuant to Section 17704.01(d) of the California
Corporations Code, subject to administration as provided by applicable law,
without the permission or consent of the heirs, successors, or assigns or,
those administering the estate of the deceased member.</p>

<p class=MsoNormal style='margin-bottom:12.0pt;text-align:justify;text-indent:
52.0pt'>(iv) Entry of a decree of judicial dissolution
under the Act.</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(b)<span style='margin-right:20.0pt'> </span>Notwithstanding
any other provision of this Agreement, the bankruptcy of the Member shall not
cause the Member to cease to be a member of the Company and upon the occurrence
of such an event, the business of the Company shall continue without
dissolution.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(c)<span style='margin-right:20.0pt'> </span>In
the event of dissolution, the Company shall conduct only such activities as are
necessary to wind up its affairs (including the sale of the assets of the
Company in an orderly manner), and the assets of the Company shall be applied
in the manner, and in the order of priority, set forth in the Act.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(d)<span style='margin-right:20.0pt'> </span>The
Company shall terminate when (i) all of the assets of the Company, after
payment of or due provision for all debts, liabilities and obligations of the
Company, shall have been distributed to the Member in the manner provided for
in this Agreement and (ii) the Articles of Organization shall have been
canceled in the manner required by the Act.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>Section 15.      <u>Miscellaneous</u>.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(a)<span style='margin-right:20.0pt'> </span>The
Member shall not have any interest in any specific assets of the Company, and
the Member shall not have the status of a creditor with respect to any
distribution made under this Agreement.  The interest of the Member in the
Company is personal property.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(b)<span style='margin-right:20.0pt'> </span>None of the
provisions of this Agreement shall be for the benefit of or enforceable by any
creditor of the Company or by any creditor of the Member.  Nothing in this
Agreement shall be deemed to create any right in any person (other than Covered
Persons) not a party hereto, and this Agreement shall not be construed in any
respect to be a contract in whole or in part for the benefit of any third
Person.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(c)<span style='margin-right:20.0pt'> </span>Each
provision of this Agreement shall be considered severable and if for any reason
any provision or provisions herein are determined to be invalid, unenforceable
or illegal under any existing or future law, such invalidity, unenforceability
or illegality shall not impair the operation of or affect those portions of
this Agreement that are valid, enforceable and legal.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(d)<span style='margin-right:20.0pt'> </span>This Agreement constitutes the entire
agreement with respect to the subject matter hereof.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(e)<span style='margin-right:20.0pt'> </span>This
Agreement shall be governed by and construed under the laws of the State of California
(without regard to conflict of laws principles), all rights and remedies being
governed by said laws.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>(f)<span style='margin-right:20.0pt'> </span>This
Agreement may be modified, supplemented or amended only pursuant to a written
agreement executed and delivered by the Member. </p>

<p class=MsoNormal style='text-indent:36.0pt'> </p>

<p class=MsoNormal style='text-align:justify;text-indent:36.0pt'>IN WITNESS
WHEREOF, the undersigned, intending to be legally bound hereby, has duly
executed this Operating Agreement as of the date set forth below.</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='margin-left:108.0pt;text-indent:-108.0pt'>Dated: ${data.formation_date}</p>

<p class=MsoNormal style='margin-left:108.0pt;text-indent:-108.0pt'>&nbsp;</p>

<p class=MsoNormal style='margin-left:108.0pt;text-indent:-108.0pt'>MEMBER:</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal>___________________________</p>

<p class=MsoNormal>Name: ${data.member_name}</p>

</div>
      </div>`

  return (
    <div dangerouslySetInnerHTML={{__html: html}}/>
  )
}

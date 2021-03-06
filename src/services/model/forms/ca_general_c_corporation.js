/* eslint-disable */
export default {
  name: 'ca_general_s_corporation',
  description: 'Creating The California C-Corporation',
  start: 'single_2',
  kind: 'Form',
  step: 11,
  nodes: [
    {
      id: 'goto_1',
      kind: 'Goto',
      content: {
        kind: 'form',
        id: 'ca_professional_c_corporation',
      },
    },
    {
      id: 'single_2',
      kind: 'Single',
      content: {
        question: 'What will be the primary business of the company?',
        fields: [
          { kind: 'choice', label: 'Real Estate Investment' },
          { kind: 'choice', label: 'A Profession', next: 'yesno_2' },
          {
            kind: 'choice',
            label: 'Personal Services (other than a Profession)',
          },
          { kind: 'choice', label: 'Restaurant' },
          { kind: 'choice', label: 'Hotel' },
          { kind: 'choice', label: 'Farming' },
          { kind: 'choice', label: 'Retail' },
          { kind: 'choice', label: 'Construction' },
          { kind: 'choice', label: 'A Brokerage' },
          { kind: 'choice', label: 'Finance' },
          { kind: 'choice', label: 'Insurance' },
          { kind: 'choice', label: 'Manufacturing' },
          { kind: 'choice', label: 'Mineral Extraction' },
          { kind: 'choice', label: 'Other' },
        ],
        next: 'input_4',
      },
    },
    {
      id: 'yesno_2',
      kind: 'YesNo',
      content: {
        question: 'Does your profession require a license, certification, or registration authorized by the Business and Professional Code, the Chiropractic Act, or the Osteopathic Act?',
        fields: [
          { kind: 'choice', label: 'Yes', next: 'yesno_3' },
          { kind: 'choice', label: 'No', next: 'input_4' },
        ],
        note: {
          title: 'Requires license, certification, or registration?',
          content: `<ul>
            <li>If your profession requires a license, certification, or other registration from the state, there may be additional requirements in forming your corporation.</li>
          </ul>`,
        },
      },
    },
    {
      id: 'yesno_3',
      kind: 'YesNo',
      content: {
        question: "Does your profession required a corporation to be a professional corporation?<br /><small>Check with your regulatory board whether your profession requires a professional corporation (as opposed to a traditional corporation), and for restrictions on the name of your professional corporation. A list of California  regulatory boards is available <a href='http://www.dca.ca.gov/about_dca/entities.shtml' target='_blank'>here.</a></small>",
        fields: [
          { kind: 'choice', label: 'Yes', next: 'goto_1' },
          { kind: 'choice', label: 'No', next: 'input_4' },
        ],
        note: {
          title: 'Professional Corporation?',
          content: `<ul>
            <li>California law generally permits professionals to organize as corporations. Many professions, if they incorporate, must form a professional corporation, as opposed to a traditional corporation under the General Corporation Law. For example, the corporations of dentists, certified public accountants, doctors, veterinarians, lawyers, optometrists, marriage and family therapists, psychiatrists, and psychologists (all of whom require state licensure), are all required to be professional corporations. You should confirm with the board governing your profession whether your corporation must be a professional corporation. If your profession does not require a professional corporation, you are generally authorized to incorporate under the General Corporation Law.</li>
          </ul>`,
        },
      },
    },
    {
      id: 'input_4',
      kind: 'Input',
      content: {
        question: 'What will be the name of your company?',
        fields: [{ kind: 'text', store: 'company_name' }],
        next: 'input_5',
        note: {
          title: 'Name of Corporation',
          content: `<ul>
            <li>The name of your business cannot be misleading or confusingly similar to that of a preexisting corporation. You can check search engines and <a href='https://businesssearch.sos.ca.gov/' target='_blank'>https://businesssearch.sos.ca.gov/</a> to see if there is a preexisting corporation with a similar name. A confusingly similar name does not have to be exactly the same, it includes subtle differences – like upper instead of lower case letters; “&” instead of “and”; or “7” instead of “seven”. Registering a new corporation with a substantially similar name to an existing corporation requires written consent and approval by the California Secretary of State.</li>
            <li>Your corporate name cannot include the words “bank”, “credit union”, “trust”, “trustee”, or related words unless you have a certificate of approval of the Commissioner of Business Oversight, or are forming a corporation pursuant to California Banking Law.</li>
            <li>You may also want to consider whether your corporate name will be eligible for trademark protection (see section on Trademark for more information).</li>
            <li>You should input the entire name of the company as you would like it to appear on the records of the California Secretary of State.</li>
          </ul>`,
        },
      },
    },
    {
      id: 'input_5',
      kind: 'Input',
      content: {
        question: 'What will be the primary address of the company?',
        fields: [
          {
            kind: 'text',
            store: 'company_address_street',
            placeholder: 'Street',
          },
          { kind: 'text', store: 'company_address_city', placeholder: 'City' },
          {
            kind: 'text',
            store: 'company_address_state',
            placeholder: 'State',
          },
          {
            kind: 'text',
            store: 'company_address_zipcode',
            placeholder: 'ZIP Code',
          },
        ],
        next: 'single_5_5',
        note: {
          title: 'Address of Corporation',
          content: `<ul>
            <li>You must provide the initial street address and the initial mailing address if different from the street address.</li>
            <li>You should note this address will be a public record.</li>
          </ul>`,
        },
      },
    },
    {
      id: 'single_5_5',
      kind: 'Single',
      content: {
        question: 'Would you like to authorize one or two classes of shares?',
        fields: [
          { kind: 'choice', label: 'One', next: 'single_6' },
          { kind: 'choice', label: 'Two', next: 'input_6_2' },
        ],
        store: 'classes_of_shares',
      },
    },
    {
      id: 'single_6',
      kind: 'Single',
      content: {
        question: 'What is the total number of shares the corporation will be authorized to issue?',
        fields: [
          { kind: 'choice', label: '1,000,000', value: 1000000 },
          { kind: 'choice', label: '100,000', value: 100000 },
          { kind: 'number', label: 'Other' },
        ],
        store: 'number_of_shares',
        next: 'input_7',
        note: {
          title: 'Number of Shares',
          content: `<ul>
            <li>Authorized shares are those which the company is allowed to issue – shares only become “issued” once they are sold to someone.</li>
            <li>Shares that are authorized but not yet issued may be issued and sold in the future.</li>
            <li>You can only issue (or sell) as many shares as you have authorized. If you later decide you want to authorize more shares, you will have to pay a fee to the state to amend your articles of incorporation (the paperwork you file with the state of California to establish your corporation). In California, unlike Delaware, there is no an additional tax or fee for having a higher number of authorized shares.</li>
            <li>The total number of shares is somewhat arbitrary; the more important part is the overall percentage of ownership held by each shareholder. Owning one out of one hundred shares is the same as owning one million out of one hundred million shares. However, authorizing more shares can make it easier to issue shares to more people. For example, if you only authorize 10 shares, you can only issue shares to 10 people (without issuing fractional shares), and only in increments of 10% (like 10%, 20%, 30%, etc). By authorizing 100 shares, you could issue shares to 100 people, and in increments of 1% (like a 33% interest for example). In determining the total amount to authorize, consider the future of the corporation – will you issue stock or options to employees, directors, or investors?</li>
          </ul>`,
        },
      },
    },
    {
      id: 'input_6_2',
      kind: 'Input',
      content: {
        question: 'What is the number of common and preferred shares the corporation will be authorized to issue?',
        fields: [
          {
            kind: 'text',
            store: 'number_of_common_shares',
            placeholder: 'Common',
          },
          {
            kind: 'text',
            store: 'number_of_preferred_shares',
            placeholder: 'Preferred',
          },
        ],
        next: 'input_7',
        note: {
          title: 'Number of Shares',
          content: `<ul>
            <li>Authorized shares are those which the company is allowed to issue – shares only become “issued” once they are sold to someone.</li>
            <li>Shares that are authorized but not yet issued may be issued and sold in the future.</li>
            <li>You can only issue (or sell) as many shares as you have authorized. If you later decide you want to authorize more shares, you will have to pay a fee to the state to amend your articles of incorporation (the paperwork you file with the state of California to establish your corporation). In California, unlike Delaware, there is no an additional tax or fee for having a higher number of authorized shares.</li>
            <li>The total number of shares is somewhat arbitrary; the more important part is the overall percentage of ownership held by each shareholder. Owning one out of one hundred shares is the same as owning one million out of one hundred million shares. However, authorizing more shares can make it easier to issue shares to more people. For example, if you only authorize 10 shares, you can only issue shares to 10 people (without issuing fractional shares), and only in increments of 10% (like 10%, 20%, 30%, etc). By authorizing 100 shares, you could issue shares to 100 people, and in increments of 1% (like a 33% interest for example). In determining the total amount to authorize, consider the future of the corporation – will you issue stock or options to employees, directors, or investors?</li>
          </ul>`,
        },
      },
    },
    {
      id: 'input_7',
      kind: 'Input',
      content: {
        question: 'Who will incorporate the company?',
        fields: [
          {
            kind: 'text',
            store: 'incorporator_name_firstname',
            placeholder: 'First Name',
          },
          {
            kind: 'text',
            store: 'incorporator_name_lastname',
            placeholder: 'Last Name',
          },
        ],
        next: 'input_8',
        note: {
          title: 'Name of incorporator',
          content: `<ul>
            <li>The incorporator is the person who is organizing the corporation. The incorporator signs documents and acts for the corporation until the board of directors is elected.</li>
            <li>The incorporator can be any adult; it need not be an officer, director, or shareholder of the corporation.</li>
          </ul>`,
        },
      },
    },
    {
      id: 'input_8',
      kind: 'Input',
      content: {
        question: 'Who will serve as the registered agent of the company?',
        fields: [{ kind: 'text', store: 'registered_agent_name' }],
        next: 'single_9',
        note: {
          title: 'Name of registered agent',
          content: `<ul>
            <li>The registered agent is the person who receives official correspondence for the corporation. For example, the registered agent would be served (physically handed the papers) if the corporation were sued.</li>
            <li>The registered agent should agree beforehand to accept service of process on behalf of the corporation.</li>
            <li>The registered agent can be either an individual who resides in California or an active California corporation. Your corporation cannot be its own registered agent.
              <ul>
                <li>The individual can be an officer, director, or shareholder of the company, or any other adult.</li>
                <li>A corporate registered agent must have filed a 1505 Certificate with the California Secretary of State.
                  <ul>
                    <li>You can check <a href='https://businessfilings.sos.ca.gov/frmlist1505s.asp' target='_blank'>here</a> to see if a corporation has filed a 1505 Certificate and to ensure the spelling of the corporation’s name.</li>
                    <li>If the corporation has not filed a 1505 Certificate, it must register, which requires the corporation:
                      <ul>
                        <li>Be an active, registered California corporation,</li>
                        <li>Pay a $30 filing fee, and</li>
                        <li>Fill out and submit a form.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>There are services which will serve as your corporation’s registered agent for a fee.</li>
          </ul>`,
        },
      },
    },
    {
      id: 'single_9',
      kind: 'Single',
      content: {
        question: 'Is <strong>${registered_agent_name}</strong> a person or a corporation?',
        fields: [
          { kind: 'choice', label: 'Person', next: 'input_10' },
          { kind: 'choice', label: 'Corporation', next: 'yesno_11' },
        ],
        note: {
          title: 'Person or corporation',
          content: `<ul>
            <li>As noted, your registered agent can be either a person or a certified corporation</li>
          </ul>`,
        },
      },
    },
    {
      id: 'input_10',
      kind: 'Input',
      content: {
        question: "What is <strong>${registered_agent_name}</strong>'s address?",
        fields: [
          {
            kind: 'text',
            store: 'registered_agent_address_street',
            placeholder: 'Street',
          },
          {
            kind: 'text',
            store: 'registered_agent_address_city',
            placeholder: 'City',
          },
          {
            kind: 'text',
            store: 'registered_agent_address_state',
            placeholder: 'State',
          },
          {
            kind: 'text',
            store: 'registered_agent_address_zipcode',
            placeholder: 'ZIP Code',
          },
        ],
        next: 'final_1',
        note: {
          title: 'Address of registered agent',
          content: `<ul>
              <li>Must be a California address, it can be a business or residence street address.</li>
              <li>Cannot be a P.O. Box, “in care of”, or have a city abbreviation (i.e., not “LA”)</li>
              <li>You should note that this address will be a public record.</li>
            </ul>`,
        },
      },
    },
    {
      id: 'yesno_11',
      kind: 'YesNo',
      content: {
        question: 'Note that you may only select a corporation that is registered with the California Secretary of State as a Registered Corporate Agent for service of process. Is <strong>${registered_agent_name}</strong> a Registered Corporate Agent?',
        fields: [
          { kind: 'choice', label: 'Yes', next: 'final_2' },
          { kind: 'choice', label: 'No', next: 'input_12' },
        ],
        note: {
          title: 'Corporate Registered Agent',
          content: `<ul>
            <li>A corporate registered agent must have filed a 1505 Certificate with the California Secretary of State.</li>
            <li>You can check <a href='https://businessfilings.sos.ca.gov/frmlist1505s.asp' target='_blank'>here</a> to see if a corporation has filed a 1505 Certificate and to ensure the spelling of the corporation’s name.</li>
          </ul>`,
        },
      },
    },
    {
      id: 'input_12',
      kind: 'Input',
      content: {
        question: 'Please select an individual to be your registered agent. Who will serve as the registered agent of the company?',
        fields: [{ kind: 'text', store: 'registered_agent_name' }],
        next: 'input_8',
        note: {
          title: 'Individual registered agent',
          content: `<ul>
            <li>The registered agent is the person who receives official correspondence for the corporation. For example, the registered agent would be served (physically handed the papers) if the corporation were sued.</li>
            <li>The registered agent should agree beforehand to accept service of process on behalf of the corporation.</li>
            <li>Please select an individual who resides in California to be your registered agent. You can select any adult; your registered agent can, but does not have to be, a founder, director, or shareholder of your corporation.</li>
          </ul>`,
        },
      },
    },
    {
      id: 'final_1',
      kind: 'Final',
      content: {
        kind: 'Form',
        form: 'ca_form_articles_of_c_incorporation_1',
      },
    },
    {
      id: 'final_2',
      kind: 'Final',
      content: {
        kind: 'Form',
        form: 'ca_form_articles_of_c_incorporation_2',
      },
    },
  ],
}

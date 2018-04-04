import { DefaultLayout } from "../layouts/DefaultLayout";
import { Section } from "../components/global/Section";

export default () => (
  <DefaultLayout
    title="Source Code"
    sublinks={[
      { name: "Philosophy", link: "philosophy" },
      {
        name: "Choosing your source code provider",
        link: "choosing-your-source-code-provider"
      },
      {
        name: "Code of Conduct",
        link: "code-of-conduct"
      },
      {
        name: "Repositories",
        link: "repositories"
      }
    ]}
  >
    <Section title="Philosophy" id="philosophy">
      <p>
        Everything we create and maintain (both the hardware and the software)
        is open-source and free as in freedom.
      </p>
    </Section>
    <Section
      title="Choosing your source code provider"
      id="choosing-your-source-code-provider"
    >
      <p>
        While we work primarly with GitHub for issue tracking and in order to
        reach a greater audience, we also have a public, self hosted Gitea (will
        be implemented soon) instance. Gitea is an open-source alternative to
        GitHub used by organisations such as the Free Sofware Foundation Europe
        (FSFE). We recommend exploring the repositories through it and opening
        up issues there, but you may of course also use GitHub as both repos are
        being kept in sync.
      </p>
      <p>
        With that in mind, visit either our open-source{" "}
        <a href="https://git.opensdcp.org">
          Gitea (will be implemented soon) instance
        </a>{" "}
        or <a href="https://github.com/opensdcp/">GitHub organistion</a> to look
        at the source code.
      </p>
    </Section>
    <Section title="Code of Conduct" id="code-of-conduct">
      We use a nearly 1:1 copy of the{" "}
      <a href="https://live.gnome.org/CodeOfConduct">GNOME code of conduct</a>{" "}
      as we find it to be simple, helpful and concise.
      <h3>Summary</h3>
      The OpenSDCP project creates software and hardware for a better world. We
      achieve this by behaving well towards each other. Therefore this document
      suggests what we consider ideal behaviour, so you know what to expect when
      getting involved in the OpenSDCP project. This is who we are and what we
      want to be. There is no official enforcement of these principles, and this
      should not be interpreted like a legal document.
      <h3>Advice</h3>
      <dl>
        <dt>Be respectful and considerate:</dt>
        <dd>
          Disagreement is no excuse for poor behaviour or personal attacks.
          Remember that a community where people feel uncomfortable is not a
          productive one.
        </dd>
        <dt>Be patient and generous:</dt>
        <dd>
          If someone asks for help it is because they need it. Do politely
          suggest specific documentation or more appropriate venues where
          appropriate, but avoid aggressive or vague responses such as{" "}
          {`"RTFM"`}.
        </dd>
        <dt>Assume people mean well:</dt>
        <dd>
          Remember that decisions are often a difficult choice between competing
          priorities. If you disagree, please do so politely. If something seems
          outrageous, check that you did not misinterpret it. Ask for
          clarification, but do not assume the worst. Try to be concise: Avoid
          repeating what has been said already. Making a conversation larger
          makes it difficult to follow, and people often feel personally
          attacked if they receive multiple messages telling them the same
          thing.
        </dd>
      </dl>
    </Section>
    <Section title="Repositories" id="repositories">
      <ul>
        <li>
          <div>OpenSNET Bridge Client (Web)</div>
          <div>License: GPL-3.0</div>
          <div>
            <a href="https://github.com/opensdcp/opensnet-bridge-client-web">
              GitHub
            </a>
          </div>
          <div>
            <a href="https://git.opensdcp.org/opensdcp/opensnet-bridge-client-web">
              Gitea (will be implemented soon)
            </a>
          </div>
        </li>
        <li>
          <div>OpenSDCP Website</div>
          <div>License: GPL-3.0</div>
          <div>
            <a href="https://github.com/opensdcp/opensdcp-website">GitHub</a>
          </div>
          <div>
            <a href="https://git.opensdcp.org/opensdcp/opensdcp-website">
              Gitea (will be implemented soon)
            </a>
          </div>
        </li>
        <li>
          <div>OpenSDCP Design</div>
          <div>License: CC-BY-4.0</div>
          <div>
            <a href="https://github.com/opensdcp/opensdcp-design">GitHub</a>
          </div>
          <div>
            <a href="https://git.opensdcp.org/opensdcp/opensdcp-design">
              Gitea (will be implemented soon)
            </a>
          </div>
        </li>
      </ul>
    </Section>
  </DefaultLayout>
);

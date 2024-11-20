<div align="center">
<pre>
  ██    ████   ████          ████  ██████ ██   ██   ██   ██████ 
 ████  ██  ██ ██            ██     ██     ███  ██  ████    ██   
██  ██ ██  ██  ████  ██████ ██ ███ ████   ██ █ ██ ██  ██   ██   
██████ ██  ██     ██        ██  ██ ██     ██  ███ ██████   ██   
██  ██  ████  █████          ████  ██████ ██   ██ ██  ██ ██████ 
</pre>
</div>
<p align="center">
	<em>Empower Your AI Journey with AOS-GenAI: Unleashing Intelligent Connections!</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Alexis-CAPON/AOS-GenAI?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Alexis-CAPON/AOS-GenAI?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Alexis-CAPON/AOS-GenAI?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Alexis-CAPON/AOS-GenAI?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

AOS-GenAI is an innovative project solving the challenge of efficient content retrieval and analysis using OpenAI embeddings. Key features include seamless integration with external services, enabling enhanced similarity search and dynamic PowerPoint generation. Targeting developers and data scientists, it streamlines content processing and enhances user experience through intelligent data handling.

## 📁 Project Structure

```sh
└── AOS-GenAI/
    ├── LICENSE
    ├── README.md
    ├── backendv0.7
    │   ├── __pycache__
    │   ├── agents.py
    │   ├── api_embedchain.py
    │   ├── api_langchain.py
    │   ├── api_openapi.py
    │   ├── api_rag.py
    │   ├── api_redis.py
    │   ├── api_request.py
    │   ├── api_sharepointloader.py
    │   ├── config.json
    │   ├── config.yaml
    │   ├── main.py
    │   ├── o365_token.txt
    │   ├── powerpoint_pipeline.py
    │   ├── record_manager_cache.sql
    │   ├── requirements.txt
    │   ├── server.py
    │   ├── temp
    │   ├── temp2
    │   ├── templates.py
    │   ├── text_pipeline.py
    │   └── wsgi.py
    ├── front0.32
    │   ├── .eslintrc.json
    │   ├── .gitignore
    │   ├── README.MD
    │   ├── app
    │   ├── auth.config.ts
    │   ├── auth.ts
    │   ├── components
    │   ├── components.json
    │   ├── context
    │   ├── data
    │   ├── hooks
    │   ├── lib
    │   ├── middleware.js
    │   ├── next-auth.d.ts
    │   ├── next.config.js
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── prisma
    │   ├── public
    │   ├── routes.ts
    │   ├── seoConfig
    │   ├── src-tauri
    │   ├── tailwind.config.ts
    │   ├── tsconfig.json
    │   └── utils
    └── images
        ├── logo.png
        └── screenshot.png
```


### 📂 Project Index
<details open>
	<summary><b><code>AOS-GENAI/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			</table>
		</blockquote>
	</details>
	<details> <!-- backendv0.7 Submodule -->
		<summary><b>backendv0.7</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/api_request.py'>api_request.py</a></b></td>
				<td>- Facilitates querying and retrieving relevant content from a Qdrant vector store using OpenAI embeddings<br>- Handles API authentication and connection setup, enabling efficient similarity search based on user queries<br>- Enhances the project's functionality by seamlessly integrating with external services for content retrieval and analysis.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/powerpoint_pipeline.py'>powerpoint_pipeline.py</a></b></td>
				<td>Generates a PowerPoint presentation by combining live conversation data with retrieved documents, enhancing the project's functionality and user experience.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/api_redis.py'>api_redis.py</a></b></td>
				<td>- Manages user conversations in Redis, allowing retrieval, update, and caching of conversation data based on user and conversation IDs<br>- Facilitates efficient access to conversation content and extracted responses, enhancing performance and scalability of the system.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/config.yaml'>config.yaml</a></b></td>
				<td>Configure the Vector Database to use the Qdrant provider with a specific collection named Sharepoint1.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/record_manager_cache.sql'>record_manager_cache.sql</a></b></td>
				<td>- Summary:
The provided code file plays a crucial role in the project's architecture by implementing a key functionality that enhances the overall user experience<br>- It contributes to the project's core objectives by efficiently handling a specific aspect of the system's functionality<br>- The code file's purpose aligns seamlessly with the project's structure, ensuring a cohesive and robust architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/api_sharepointloader.py'>api_sharepointloader.py</a></b></td>
				<td>- Automates downloading and storing files from SharePoint in batches, then loads them into a vectorial database<br>- Ensures efficient handling of files by avoiding multiple indexings<br>- Integrates with Microsoft Graph using O365 Account for authentication and storage management.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/agents.py'>agents.py</a></b></td>
				<td>- Define agents for plan creation and parsing using GPT-3.5-turbo model with specific roles and instructions<br>- Agents include overall_plan_creator, detailed_plan_creator, and json_parser, each with unique system messages and termination conditions<br>- Agents facilitate the generation of synthetic and detailed plans for PowerPoint presentations based on provided documents.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/o365_token.txt'>o365_token.txt</a></b></td>
				<td>Retrieve and store Office 365 access token data for authentication purposes within the backend architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/main.py'>main.py</a></b></td>
				<td>- Improve user interaction by handling chat requests and system responses, managing conversations, and routing requests to appropriate pipelines for processing<br>- The code facilitates conversation tracking, user input extraction, and output generation based on specified pipelines, enhancing the overall chat system functionality within the project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/config.json'>config.json</a></b></td>
				<td>Enables toggling debug mode in the backend system.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/server.py'>server.py</a></b></td>
				<td>- The code file `server.py` in the backendv0.7 directory sets up a Flask server with CORS and rate limiting<br>- It provides endpoints for retrieving conversations, creating conversations, and getting answers using APIs<br>- The server interacts with Redis for storing conversation data and integrates with an external API for chat functionality.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/requirements.txt'>requirements.txt</a></b></td>
				<td>- Manage project dependencies by specifying required packages and versions in the 'requirements.txt' file<br>- This ensures a consistent environment for the codebase, facilitating seamless collaboration and deployment.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/templates.py'>templates.py</a></b></td>
				<td>Define templates for different types of slides in a structured format.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/api_langchain.py'>api_langchain.py</a></b></td>
				<td>- Facilitates loading, splitting, and indexing of documents from various sources using OpenAI embeddings and Qdrant for efficient search and retrieval<br>- Manages document collections and schema creation, ensuring seamless integration with the Qdrant client for optimized document indexing and querying capabilities.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/api_rag.py'>api_rag.py</a></b></td>
				<td>- Initialize RAG by connecting to a vector database, loading Sharepoint data, and indexing it<br>- The code sets up a client, loads Sharepoint documents, transforms them, and adds them to the collection in the database<br>- This process enables efficient querying and retrieval of relevant information from the Sharepoint data.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/text_pipeline.py'>text_pipeline.py</a></b></td>
				<td>- Implement a text pipeline function that leverages AI to assist in answering user questions based on provided conversation context<br>- The function utilizes an external API and configuration settings to generate responses and sources for the conversation.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/api_embedchain.py'>api_embedchain.py</a></b></td>
				<td>- Facilitates integration with Qdrant and OpenAI APIs to query and retrieve information related to lean portfolio management<br>- The code initializes the necessary environment variables, connects to Qdrant, adds data, and performs a query to obtain an answer and sources.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/api_openapi.py'>api_openapi.py</a></b></td>
				<td>- Facilitates real-time conversational interactions with OpenAI's GPT-3.5 model<br>- Enables keyword and entity extraction from user input, aiding in understanding user needs<br>- Supports context creation and response formatting based on predefined structures<br>- Enhances user experience by providing tailored responses and potential follow-up questions.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/wsgi.py'>wsgi.py</a></b></td>
				<td>Initialize the RAG API client and run the server application.</td>
			</tr>
			</table>
			<details>
				<summary><b>temp</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/temp/05 Exploring Lean Portfolio Management (5.1).pptx'>05 Exploring Lean Portfolio Management (5.1).pptx</a></b></td>
						<td>- The provided code file serves as a crucial component within the project's architecture, contributing to the overall functionality of the P directory<br>- It plays a key role in achieving a specific purpose within the codebase, enhancing the project's capabilities and supporting its objectives.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.7/temp/06 Leading the Change (5.1).pptx'>06 Leading the Change (5.1).pptx</a></b></td>
						<td>- The provided code file serves as a crucial component within the overall architecture of the Proj project<br>- It plays a key role in achieving the project's main objective by facilitating a specific functionality or feature<br>- This code file contributes to the project's structure and functionality, enhancing its overall capabilities and performance.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- front0.32 Submodule -->
		<summary><b>front0.32</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/postcss.config.js'>postcss.config.js</a></b></td>
				<td>Configures PostCSS plugins Tailwind CSS and Autoprefixer for the front-end build process, ensuring consistent styling and browser compatibility across the project.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/next-auth.d.ts'>next-auth.d.ts</a></b></td>
				<td>- Enhances NextAuth session with custom user properties like role and whitelisting status<br>- Extends the default user session to include additional data for improved authentication and authorization capabilities within the project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/.eslintrc.json'>.eslintrc.json</a></b></td>
				<td>- Defines ESLint configuration for Next.js project, extending Next.js presets for Babel and Core Web Vitals<br>- Ensures consistent code style and performance optimizations across the codebase.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/package-lock.json'>package-lock.json</a></b></td>
				<td>- The code file provided in front0.32/package-lock.json serves the purpose of managing dependencies for the front0.32 project within the codebase architecture<br>- It ensures that the necessary packages, such as "@auth/prisma-adapter", "@headlessui/react", "@prisma/client", "@radix-ui/react-alert-dialog", and others, are locked at specific versions to maintain stability and compatibility within the project<br>- This file plays a crucial role in orchestrating the required dependencies for the front0.32 project, contributing to the overall functionality and reliability of the codebase.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/routes.ts'>routes.ts</a></b></td>
				<td>Defines public and authentication routes, API authentication prefix, and default login redirect path for the project's frontend architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/tsconfig.json'>tsconfig.json</a></b></td>
				<td>- Configures TypeScript compiler options for the project, targeting ES5 with strict settings and bundler module resolution<br>- Includes specific file paths for TypeScript and JSX files, along with plugins and path mappings<br>- This file ensures consistent compilation and type-checking across the codebase.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/middleware.js'>middleware.js</a></b></td>
				<td>- Implements authentication middleware logic based on user roles and whitelisting<br>- Handles redirection for different routes, ensuring secure access control<br>- Integrates with NextAuth for authentication configuration.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/next.config.js'>next.config.js</a></b></td>
				<td>Enables strict mode for React in the Next.js project configuration.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/package.json'>package.json</a></b></td>
				<td>Define project dependencies and scripts for development, building, and deployment in the front0.32/package.json file.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/auth.config.ts'>auth.config.ts</a></b></td>
				<td>Define authentication providers for GitHub and Azure AD in the Next.js authentication configuration.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/auth.ts'>auth.ts</a></b></td>
				<td>- Enables authentication and session management using NextAuth, integrating with Prisma for data storage<br>- Handles user account linking, session customization, and JWT token processing<br>- Implements authentication callbacks and user role management based on token data<br>- Facilitates user sign-in, sign-out, and authentication handlers within the project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components.json'>components.json</a></b></td>
				<td>Defines project styling, resource usage, and file aliases for easy import across the codebase.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/tailwind.config.ts'>tailwind.config.ts</a></b></td>
				<td>- Define Tailwind CSS configuration for project styling, including dark mode, content paths, theme customization, and plugins<br>- Tailors design system with custom gradients, animations, and container settings for responsive layouts.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/README.MD'>README.MD</a></b></td>
				<td>- Optimize font loading in a Next.js project using `next/font` for automatic optimization and loading of custom Google Font<br>- This enhances performance and user experience by efficiently managing font resources.</td>
			</tr>
			</table>
			<details>
				<summary><b>lib</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/lib/db.ts'>db.ts</a></b></td>
						<td>- Initialize and manage the database connection using PrismaClient<br>- The code ensures a single database connection instance is shared across the application in non-production environments, optimizing resource usage.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/lib/auth.ts'>auth.ts</a></b></td>
						<td>Retrieve current user and role information from the authentication session.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/lib/utils.ts'>utils.ts</a></b></td>
						<td>Enhances class value handling by merging and combining CSS classes efficiently for improved styling in the project architecture.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>prisma</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/prisma/schema.prisma'>schema.prisma</a></b></td>
						<td>- Defines data models and relationships for a PostgreSQL database using Prisma schema<br>- Models include User and Account with fields like name, email, and provider<br>- Enum UserRole defines user roles<br>- The schema also specifies relationships between User and Account entities.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<details>
						<summary><b>ui</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components/ui/alert-dialog.tsx'>alert-dialog.tsx</a></b></td>
								<td>- Defines reusable components for an alert dialog interface, including triggers, overlays, content, headers, footers, titles, descriptions, actions, and cancel buttons<br>- These components are designed to be easily integrated into the UI for displaying alerts and user interactions within the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components/ui/label.tsx'>label.tsx</a></b></td>
								<td>Implements a custom label component with variant styles for the UI, enhancing accessibility and visual consistency across the project.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components/ui/scroll-area.tsx'>scroll-area.tsx</a></b></td>
								<td>- Enhances UI functionality by providing custom scroll areas and bars for improved user experience within the front-end components<br>- This code file integrates with Radix UI's scroll area primitives to create visually appealing and interactive scroll elements.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components/ui/textarea.tsx'>textarea.tsx</a></b></td>
								<td>Enables rendering a customizable textarea component for the UI, enhancing user interaction and experience within the project's frontend architecture.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components/ui/separator.tsx'>separator.tsx</a></b></td>
								<td>- Defines a React component for rendering separators, enhancing UI structure and visual hierarchy<br>- Integrates with Radix UI for consistent styling and behavior across the codebase.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components/ui/command.tsx'>command.tsx</a></b></td>
								<td>- Implements UI components for command interactions, including dialog, input, list, group, item, shortcut, and separator<br>- Facilitates user interaction with commands in a visually appealing and user-friendly manner.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components/ui/popover.tsx'>popover.tsx</a></b></td>
								<td>- Implements a customizable Popover component for UI interactions, enhancing user experience by displaying contextual information or actions<br>- The component leverages Radix UI for robust functionality and styling, contributing to a cohesive and interactive frontend interface.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components/ui/select.tsx'>select.tsx</a></b></td>
								<td>- Implements UI components for selecting options in a dropdown menu<br>- The code defines various elements like trigger, content, label, items, and separators for the select component<br>- It enhances user interaction and visual presentation within the project's frontend architecture.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components/ui/button.tsx'>button.tsx</a></b></td>
								<td>- Defines button components with various styles and sizes, allowing customization through variant props<br>- Renders a button element or slot based on configuration, enhancing UI flexibility and consistency across the project.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components/ui/drawer.tsx'>drawer.tsx</a></b></td>
								<td>- Defines reusable components for a drawer UI, including triggers, overlays, content, headers, footers, titles, and descriptions<br>- Facilitates consistent styling and functionality across the application's drawer interactions.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components/ui/dialog.tsx'>dialog.tsx</a></b></td>
								<td>- Implements UI dialog components for interactive user experiences within the project architecture<br>- The code file defines various elements like Dialog, DialogOverlay, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogFooter, DialogTitle, and DialogDescription to facilitate seamless dialog interactions in the user interface.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components/ui/tabs.tsx'>tabs.tsx</a></b></td>
								<td>- Expose UI components for tabs functionality using Radix UI, enhancing user interaction and navigation within the application<br>- The components include Tabs, TabsList, TabsTrigger, and TabsContent, facilitating a seamless and visually appealing tabbed interface for improved user experience.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components/ui/dropdown-menu.tsx'>dropdown-menu.tsx</a></b></td>
								<td>- Implements dropdown menu components for UI interactions in the front-end, facilitating user navigation and selection within the application<br>- The code defines various elements like triggers, items, labels, separators, and shortcuts to enhance the user experience and provide a structured interface for interacting with dropdown menus.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components/ui/avatar.tsx'>avatar.tsx</a></b></td>
								<td>- Defines reusable Avatar components for displaying user profile images in the UI, enhancing modularity and maintainability<br>- Encapsulates Avatar, AvatarImage, and AvatarFallback components with specific styling and functionality, promoting code organization and reusability within the UI component library.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/components/ui/card.tsx'>card.tsx</a></b></td>
								<td>- Define reusable UI components for cards with header, title, description, content, and footer<br>- These components handle styling and structure for consistent card layouts across the project.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>hooks</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/hooks/use-current-role.ts'>use-current-role.ts</a></b></td>
						<td>Enables retrieval of the current user role from the session data using NextAuth's useSession hook.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/hooks/use-current-user.ts'>use-current-user.ts</a></b></td>
						<td>Enables retrieval of the current user data from the session using NextAuth's useSession hook.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>context</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/context/GlobalContext.js'>GlobalContext.js</a></b></td>
						<td>Facilitates global state management for conversation data in the front-end, ensuring seamless data sharing across components.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/context/context.store.js'>context.store.js</a></b></td>
						<td>- Improve state management by centralizing data handling and logic in the context.store.js file<br>- This enhances codebase organization and scalability, ensuring efficient data flow and manipulation across the project.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/context/DashboardTab.js'>DashboardTab.js</a></b></td>
						<td>- Defines a context for managing the active tab in the dashboard interface<br>- The code sets up a provider component that allows children components to access and update the current tab state<br>- This context facilitates seamless navigation and interaction within the dashboard section of the application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/context/ConversationContext.js'>ConversationContext.js</a></b></td>
						<td>Defines a context for managing conversations in the front-end, providing state and functions to interact with conversation data.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>seoConfig</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/seoConfig/index.js'>index.js</a></b></td>
						<td>Define SEO configuration for the AOS project, specifying the title, description, and Open Graph metadata for optimal search engine visibility and social media sharing.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>src-tauri</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/src-tauri/Cargo.toml'>Cargo.toml</a></b></td>
						<td>- Define the Tauri application configuration in the Cargo.toml file, specifying dependencies like serde_json and tauri<br>- This file sets up the project metadata, build dependencies, and features essential for the Tauri application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/src-tauri/build.rs'>build.rs</a></b></td>
						<td>Generates Tauri build configuration to compile the project.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/src-tauri/tauri.conf.json'>tauri.conf.json</a></b></td>
						<td>- Define the build configuration and packaging details for the ChatCBC application<br>- Specify the development and distribution paths, along with the product name and version<br>- Configure Tauri settings for bundling, including icons and target platforms<br>- Set security policies and updater preferences<br>- Customize window properties for the Windows platform.</td>
					</tr>
					</table>
					<details>
						<summary><b>src</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/src-tauri/src/main.rs'>main.rs</a></b></td>
								<td>- Enables seamless execution of the Tauri application on Windows by preventing an extra console window from appearing in release mode<br>- This critical functionality ensures a smooth user experience without unnecessary distractions.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>icons</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/src-tauri/icons/icon.icns'>icon.icns</a></b></td>
								<td>- The provided code file serves as a crucial component within the overall architecture of the Proj project<br>- It plays a key role in achieving the project's main objective by facilitating a specific functionality or feature<br>- This code file contributes to the project's structure and functionality, enhancing its overall capabilities and performance.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>utils</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/utils/store-state.js'>store-state.js</a></b></td>
						<td>- Manages state for conversations, messages, and assets using Zustand<br>- Updates and clears data for each store independently.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/utils/post-response.js'>post-response.js</a></b></td>
						<td>- Enables posting user responses to a server endpoint for processing and retrieves the answer<br>- Handles errors gracefully by logging and re-throwing them for higher-level handling<br>- This function plays a crucial role in facilitating communication between the front-end and back-end systems, ensuring seamless user interactions within the application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/utils/get-conversations.js'>get-conversations.js</a></b></td>
						<td>- Handles fetching conversations and specific conversation details for a given user<br>- Utilizes Axios to make HTTP requests to the backend server<br>- Provides functions to retrieve conversations and specific conversation data based on user and conversation IDs<br>- Supports seamless communication between the frontend and backend for displaying user conversations.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/utils/post-new-conversation.js'>post-new-conversation.js</a></b></td>
						<td>- Enables posting new conversations by sending a request to the server to create a conversation with a specified user ID and initial message<br>- Handles potential errors during the process and returns the server's response<br>- This function plays a crucial role in facilitating communication within the application.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/page.jsx'>page.jsx</a></b></td>
						<td>- Renders the Landing Page component within the Home component, serving as the entry point for the application<br>- This integration ensures a seamless user experience by displaying essential content and functionalities on the initial page load.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/layout.tsx'>layout.tsx</a></b></td>
						<td>- Defines the layout and metadata for the ChatCBC project, setting the title, description, and icon<br>- The RootLayout component structures the HTML body with the Inter font and children components.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/globals.css'>globals.css</a></b></td>
						<td>- Defines global CSS variables for foreground and background colors based on user's color scheme preference<br>- Sets up color gradients for the body background using these variables.</td>
					</tr>
					</table>
					<details>
						<summary><b>login</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/login/page.jsx'>page.jsx</a></b></td>
								<td>- Defines the login page structure by importing and rendering the LoginCard component<br>- This file plays a crucial role in organizing the login functionality within the front-end architecture of the project.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/login/LoginCard.js'>LoginCard.js</a></b></td>
								<td>- Defines a login card component that allows users to sign in using different providers<br>- It presents a visually appealing interface with options for Github and Microsoft login methods<br>- The component encapsulates the login functionality and enhances the user experience by providing a seamless authentication process within the application.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>unauthorized</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/unauthorized/page.jsx'>page.jsx</a></b></td>
								<td>- Define the unauthorized page component responsible for displaying a message and options for unauthorized users<br>- Handles navigation and logout functionalities.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>_landingpage</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/_landingpage/Hero.js'>Hero.js</a></b></td>
								<td>- Define the landing page hero section with branding elements and a brief description of the AI solution offered<br>- It showcases the product name, logo, and a call-to-action for downloading<br>- The section aims to captivate visitors and communicate the essence of the AI solution provided by the project.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/_landingpage/Badge.js'>Badge.js</a></b></td>
								<td>Implements a Badge component for displaying labels with a specific styling in the landing page of the front-end application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/_landingpage/LandingPage.js'>LandingPage.js</a></b></td>
								<td>- Define the landing page structure and behavior by importing necessary modules and components<br>- Implement a function to redirect users to the login page upon button click<br>- Display a hero section and articles with specified content, authors, and versions<br>- Achieve a cohesive landing page layout for the project.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/_landingpage/Authors.js'>Authors.js</a></b></td>
								<td>Render a component displaying authors' avatars based on the provided data.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/_landingpage/hero.css'>hero.css</a></b></td>
								<td>- Define consistent styles for the landing page hero section, including padding, image sizes, text formatting, and button styles<br>- This CSS file ensures a cohesive visual presentation across different screen sizes for the landing page, enhancing user experience and brand consistency.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/_landingpage/ReleaseNote.js'>ReleaseNote.js</a></b></td>
								<td>- Defines a reusable component to display release notes for a specific version, including a description and list of features<br>- The component structure enhances the landing page by presenting key information in a visually appealing manner.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/_landingpage/Article.js'>Article.js</a></b></td>
								<td>- Render article content with date, title, author, and version details using React components like Badge and Authors<br>- Utilizes ReactMarkdown for content rendering within a structured layout.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>workflows</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/workflows/page.jsx'>page.jsx</a></b></td>
								<td>Defines a component for managing workflows within the front-end application, contributing to the overall architecture of the project.</td>
							</tr>
							</table>
							<details>
								<summary><b>_components</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/workflows/_components/Canvas.js'>Canvas.js</a></b></td>
										<td>- Enables dynamic rendering of nodes on a canvas based on user interactions<br>- Handles node addition on drop events and updates canvas layout accordingly<br>- Integrates with Redux for state management.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>dashboard</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/dashboard/page.jsx'>page.jsx</a></b></td>
								<td>- Implements a dashboard page that allows users to view and create conversations<br>- Retrieves conversations and handles conversation creation using server-side operations<br>- Renders a BaseChat component for user interaction.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/dashboard/layout.tsx'>layout.tsx</a></b></td>
								<td>- Defines the layout for the dashboard, integrating authentication and session management<br>- Renders header, footer, and conversation cards, with a section for new conversations<br>- The main content area dynamically populates with children components.</td>
							</tr>
							</table>
							<details>
								<summary><b>c</b></summary>
								<blockquote>
									<details>
										<summary><b>[conversationId]</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/dashboard/c/[conversationId]/page.jsx'>page.jsx</a></b></td>
												<td>- Implement an async function in the conversation page to handle user interactions, such as retrieving conversations, fetching specific conversations, and posting responses<br>- This function integrates with user authentication and various utility functions to facilitate seamless communication within the application.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>settings</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/dashboard/settings/page.jsx'>page.jsx</a></b></td>
										<td>Defines the dashboard settings page structure by rendering the CardsSettings component, contributing to the overall user interface of the project.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>_components</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/dashboard/_components/Header.js'>Header.js</a></b></td>
										<td>- The Header component in the provided code file orchestrates the user interface elements for the dashboard header, including user authentication, navigation, and settings<br>- It integrates user profile details, logout functionality, and menu options based on user roles<br>- This component plays a pivotal role in enhancing user experience and accessibility within the dashboard interface.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/dashboard/_components/CardsSettings.js'>CardsSettings.js</a></b></td>
										<td>- Defines a dashboard settings component that allows users to manage RAG (Red, Amber, Green) options, select languages, and delete conversations<br>- The component integrates various UI elements like buttons, popovers, and alert dialogs for a seamless user experience within the dashboard interface.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/dashboard/_components/CardsPowerpoint.js'>CardsPowerpoint.js</a></b></td>
										<td>- Enhances dashboard functionality by rendering PowerPoint cards<br>- This component contributes to the project's architecture by providing a visually appealing way to display key information on the dashboard.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/dashboard/_components/BaseChat.js'>BaseChat.js</a></b></td>
										<td>- Enables real-time chat functionality within the dashboard interface, allowing users to exchange messages with an assistant<br>- Handles message input, sending, and display, facilitating seamless communication<br>- Supports conversation creation and retrieval, enhancing user engagement and interaction within the application.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/dashboard/_components/Footer.js'>Footer.js</a></b></td>
										<td>- Defines a footer component displaying a message indicating the app is in development<br>- The component is located in the dashboard section of the front-end application.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/dashboard/_components/CardsChat2.js'>CardsChat2.js</a></b></td>
										<td>- Implements a chat interface for user interactions, allowing users to send and receive messages within a conversation<br>- Manages conversation state, message handling, and user interactions, including creating new conversations and fetching responses from a server<br>- Supports both chat and PowerPoint modes for different user experiences.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/dashboard/_components/CardsNewConversation.js'>CardsNewConversation.js</a></b></td>
										<td>- Implement a component for creating new conversations in the dashboard<br>- It utilizes tabs to switch between chat and PowerPoint discussions, with a button to initiate a new discussion<br>- The component manages state for selected tabs and message removal, enhancing user interaction within the dashboard interface.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/dashboard/_components/ConversationChat.js'>ConversationChat.js</a></b></td>
										<td>- Improve user engagement by displaying chat conversations in a visually appealing format<br>- Facilitate real-time messaging between users and the system, enhancing the overall user experience.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/dashboard/_components/BackUPBaseChat.js'>BackUPBaseChat.js</a></b></td>
										<td>- Implements a chat interface for user interactions, displaying messages and handling new message submissions<br>- Manages conversations, user input, and loading states<br>- Supports starting new conversations and receiving responses<br>- Utilizes components for UI elements and hooks for user data.</td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/dashboard/_components/CardsConversation.js'>CardsConversation.js</a></b></td>
										<td>- Displays conversation cards with click functionality to navigate to specific conversations in the dashboard<br>- Utilizes conversations data from the store and Next.js router for seamless user experience.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>api</b></summary>
						<blockquote>
							<details>
								<summary><b>auth</b></summary>
								<blockquote>
									<details>
										<summary><b>[...nextauth]</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/api/auth/[...nextauth]/route.ts'>route.ts</a></b></td>
												<td>- Exports HTTP methods for authentication from the auth module to be used in the API routes<br>- This code file facilitates handling GET and POST requests related to authentication within the project architecture.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>whitelist</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/whitelist/page.jsx'>page.jsx</a></b></td>
								<td>- Render a Whitelist page with a logout option for non-whitelisted users, featuring branding elements and a clean UI<br>- The page allows users to sign out using a provided button.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>admin</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/front0.32/app/admin/page.jsx'>page.jsx</a></b></td>
								<td>- Render an admin page with a logo, title, and message, indicating it's under construction<br>- Includes a button to navigate back.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- backendv0.5 Submodule -->
		<summary><b>backendv0.5</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.5/powerpoint_pipeline.py'>powerpoint_pipeline.py</a></b></td>
				<td>Generates a PowerPoint presentation by combining live conversation data and retrieved documents.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.5/api_redis.py'>api_redis.py</a></b></td>
				<td>- Manages user conversations in Redis, allowing retrieval, updating, and caching of conversation data<br>- Supports fetching conversations by user ID, retrieving specific conversations, and updating conversations with new content<br>- Includes functionality for automatically caching conversations from user cache to Redis at set intervals.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.5/record_manager_cache.sql'>record_manager_cache.sql</a></b></td>
				<td>- Summary:
The provided code file serves as a crucial component in the PROJECT S codebase architecture, enabling seamless integration of external APIs for data retrieval and processing<br>- It plays a pivotal role in enhancing the project's functionality by facilitating efficient communication with external systems, ultimately contributing to the project's overall success.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.5/main.py'>main.py</a></b></td>
				<td>- Facilitates chat interactions by processing user input, generating responses, and managing conversations<br>- Utilizes pipelines for text, PowerPoint, Excel, and Word outputs based on user requests<br>- Manages conversation history and unique IDs for each interaction<br>- Enables seamless communication between users and the system, enhancing user experience and information retrieval.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.5/config.json'>config.json</a></b></td>
				<td>- Enables toggling debug mode in the project, influencing logging and error handling<br>- This configuration setting impacts the behavior of the entire codebase, allowing for easier troubleshooting and development.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.5/server.py'>server.py</a></b></td>
				<td>- Handles API endpoints for creating, retrieving, and updating conversations in a chat backend system<br>- Utilizes Flask for routing and interaction with a Redis database<br>- Implements rate limiting for security<br>- Integrates with an external API for chat functionality and stores conversation data in Redis.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.5/requirements.txt'>requirements.txt</a></b></td>
				<td>Manage project dependencies by specifying required packages and versions in the 'requirements.txt' file to ensure consistent development environment setup across the codebase architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.5/api_langchain.py'>api_langchain.py</a></b></td>
				<td>Generates document splits, indexes them, and stores in Qdrant for efficient retrieval and search capabilities within the project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.5/api_rag.py'>api_rag.py</a></b></td>
				<td>- Initialize RAG by connecting to a vector database, loading Sharepoint data, and indexing it<br>- The code establishes a connection, loads data from Sharepoint, transforms it, and indexes it in the database.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.5/text_pipeline.py'>text_pipeline.py</a></b></td>
				<td>- Generates AI assistant responses based on user queries by querying a collection of documents<br>- The code constructs a response by combining relevant documents and the conversation context, then prompts the AI to provide an answer<br>- The assistant's response is added to the conversation log before being returned along with the retrieved documents.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.5/api_retriever.py'>api_retriever.py</a></b></td>
				<td>- Implements a retrieval system using Qdrant for generating detailed plans on various topics<br>- Utilizes OpenAI embeddings and GPT-3.5 model for content creation<br>- Integrates with Sharepoint1 and Cloud Qdrant for efficient data retrieval<br>- Outputs detailed plans for specific topics based on user input.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.5/api_openapi.py'>api_openapi.py</a></b></td>
				<td>- Facilitates AI-powered conversations and extracts user keywords within a defined context<br>- Handles user input, generates AI responses, and parses extracted data<br>- Supports structured output formats and additional user queries<br>- Enhances user interactions and data extraction capabilities within the project architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/Alexis-CAPON/AOS-GenAI/blob/master/backendv0.5/wsgi.py'>wsgi.py</a></b></td>
				<td>- Initialize the RAG API client and run the server using the provided code in the wsgi.py file<br>- This code sets up the necessary components for the API to function within the project architecture.</td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with AOS-GenAI, ensure your runtime environment meets the following requirements:

- **Programming Language:** Python
- **Package Manager:** Pip, Npm, Cargo


### ⚙️ Installation

Install AOS-GenAI using one of the following methods:

**Build from source:**

1. Clone the AOS-GenAI repository:
```sh
❯ git clone https://github.com/Alexis-CAPON/AOS-GenAI
```

2. Navigate to the project directory:
```sh
❯ cd AOS-GenAI
```

3. Install the project dependencies:


**Using `pip`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Pip-3776AB.svg?style={badge_style}&logo=pypi&logoColor=white" />](https://pypi.org/project/pip/)

```sh
❯ pip install -r backendv0.7/requirements.txt
```






---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/Alexis-CAPON/AOS-GenAI/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/Alexis-CAPON/AOS-GenAI/issues)**: Submit bugs found or log feature requests for the `AOS-GenAI` project.
- **💡 [Submit Pull Requests](https://github.com/Alexis-CAPON/AOS-GenAI/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/Alexis-CAPON/AOS-GenAI
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/Alexis-CAPON/AOS-GenAI/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Alexis-CAPON/AOS-GenAI">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [MIT](https://choosealicense.com/licenses) License. For more details, refer to the [MIT-License](https://choosealicense.com/licenses/) file.

---

## 🙌 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---

from autogen import AssistantAgent, UserProxyAgent
import templates


key_nico = "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"
config_list = [
    {
        "model": "gpt-3.5-turbo",
        "api_key": key_nico,
    }
]

user_proxy = UserProxyAgent(
    name="user_proxy",
    llm_config={"config_list": config_list},
    system_message="""A human admin""",
    human_input_mode="NEVER",
    is_termination_msg=lambda x: x.get("content", "").rstrip().endswith("TERMINATE") or x.get("content",
                                                                                              "").rstrip().endswith(
        "}"),
)

overall_plan_creator = AssistantAgent(
    name="overall_plan_creator",
    system_message="""You are a plan creator for a powerpoint presentation.
    Your role is to generate a synthetic and constructive plan.
    You must follow these steps carrefully:
    1) Go through the document.
    2) Extract the main ideas (it's forbidden to write them).
    3) Generate a synthetic and constructive plan, based on informations available in the document provided to you.
    When finished, return the plan.
                   """,
    llm_config={"config_list": config_list},
    is_termination_msg=lambda x: x.get("content", "").rstrip().endswith("TERMINATE") or x.get("content",
                                                                                              "").rstrip().endswith(
        "}"),
)

detailed_plan_creator = AssistantAgent(
    name="detailed_plan_creator",
    system_message="""Your role is to create a detailed plan based on the synthetic plan previously done by the overall_plan_creator.
    For each part, build the plan using slides and bulletpoints, you are free to use as many slides and as many bulletpoint per slide as you want.
    Once you are done, return the detailed plan. Do not add any Note at the end.
                   """,
    llm_config={"config_list": config_list},
    is_termination_msg=lambda x: x.get("content", "").rstrip().endswith("TERMINATE") or x.get("content",
                                                                                              "").rstrip().endswith(
        "}"),
)

json_parser = AssistantAgent(
    name="json_parser",
    system_message="""json_parser using the detailed plan and the table provided in this prompt, your role is to choose which kind of slides suits best to the content of the slide.
                   Table: """ + templates.templates + """ / json template : """ + templates.json_template + ". Once you are done return the JSON and finish the message with the word TERMINATE.",
    llm_config={"config_list": config_list},
    is_termination_msg=lambda x: x.get("content", "").rstrip().endswith("TERMINATE") or x.get("content",
                                                                                              "").rstrip().endswith(
        "}"),
)
